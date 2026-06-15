import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '../../../payload.config'
import fs from 'fs'
import path from 'path'

// Import static data
import { products } from '../../../data/products'
import { services } from '../../../data/services'
import { projects } from '../../../data/projects'
import { faqData } from '../../../data/faq'
import { blogPosts } from '../../../data/blogPosts'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    // Helper function to upload local public files to Payload Media
    const uploadMedia = async (imagePath, altText) => {
      if (!imagePath) return null
      
      const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
      const filePath = path.join(process.cwd(), 'public', cleanPath)
      
      if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`)
        return null
      }

      const filename = path.basename(filePath)
      const size = fs.statSync(filePath).size
      const extension = path.extname(filePath).toLowerCase()
      let mimetype = 'image/png'
      if (extension === '.jpg' || extension === '.jpeg') mimetype = 'image/jpeg'
      else if (extension === '.webp') mimetype = 'image/webp'
      else if (extension === '.gif') mimetype = 'image/gif'

      try {
        const media = await payload.create({
          collection: 'media',
          file: {
            data: fs.readFileSync(filePath),
            name: filename,
            size,
            mimetype,
          },
          data: {
            alt: altText,
          },
        })
        return media.id
      } catch (err) {
        console.error(`Error uploading media ${filename}:`, err)
        return null
      }
    }

    console.log('Seeding Database...')

    // 1. Seed Products
    let seededProducts = 0
    for (const prod of products) {
      // Check if product already exists
      const existing = await payload.find({
        collection: 'products',
        where: { slug: { equals: prod.slug } },
      })

      if (existing.docs.length === 0) {
        let mediaId = null
        if (prod.image) {
          mediaId = await uploadMedia(prod.image, prod.name.en || 'Product Image')
        }

        await payload.create({
          collection: 'products',
          data: {
            name: prod.name.id || prod.name.en, // default locale is 'id'
            slug: prod.slug,
            category: prod.category.en.toLowerCase().replace(/ /g, '-'),
            shortDescription: prod.shortDescription.id || prod.shortDescription.en,
            // Simple conversion of HTML string description to richText structure is handled by payload block or we can pass text
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [{ text: prod.description.id || prod.description.en, type: 'text' }],
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            specs: {
              material: prod.specs.material,
              burners: prod.specs.burners ? (prod.specs.burners.id || prod.specs.burners.en) : undefined,
              btuOutput: prod.specs.btuOutput,
              fuelType: prod.specs.fuelType ? (prod.specs.fuelType.id || prod.specs.fuelType.en) : undefined,
              dimensions: prod.specs.dimensions ? (prod.specs.dimensions.id || prod.specs.dimensions.en) : undefined,
              capacity: prod.specs.capacity ? (prod.specs.capacity.id || prod.specs.capacity.en) : undefined,
              maxTemperature: prod.specs.maxTemperature,
              temperatureRange: prod.specs.temperatureRange,
              power: prod.specs.power ? (prod.specs.power.id || prod.specs.power.en) : undefined,
              customizable: prod.specs.customizable ? (prod.specs.customizable.id || prod.specs.customizable.en) : undefined,
              features: prod.specs.features ? (prod.specs.features.id || prod.specs.features.en) : undefined,
              decks: prod.specs.decks ? (prod.specs.decks.id || prod.specs.decks.en) : undefined,
              modes: prod.specs.modes ? (prod.specs.modes.id || prod.specs.modes.en) : undefined,
              surfaceArea: prod.specs.surfaceArea,
              bowls: prod.specs.bowls ? (prod.specs.bowls.id || prod.specs.bowls.en) : undefined,
            },
            image: mediaId,
            featured: prod.featured || false,
          },
        })
        seededProducts++
      }
    }

    // 2. Seed Services
    let seededServices = 0
    for (const serv of services) {
      const existing = await payload.find({
        collection: 'services',
        where: { slug: { equals: serv.slug } },
      })

      if (existing.docs.length === 0) {
        let mediaId = null
        if (serv.image) {
          mediaId = await uploadMedia(serv.image, serv.title.en || 'Service Image')
        }

        await payload.create({
          collection: 'services',
          data: {
            title: serv.title.id || serv.title.en,
            slug: serv.slug,
            subtitle: serv.subtitle.id || serv.subtitle.en,
            shortDescription: serv.shortDescription.id || serv.shortDescription.en,
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [{ text: serv.description.id || serv.description.en, type: 'text' }],
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            icon: serv.icon,
            image: mediaId,
            features: serv.features.map(f => ({ feature: f.id || f.en })),
            process: serv.process.map(p => ({
              step: p.step,
              title: p.title.id || p.title.en,
              description: p.description.id || p.description.en,
            })),
          },
        })
        seededServices++
      }
    }

    // 3. Seed Projects
    let seededProjects = 0
    for (const proj of projects) {
      const existing = await payload.find({
        collection: 'projects',
        where: { slug: { equals: proj.slug } },
      })

      if (existing.docs.length === 0) {
        let mediaId = null
        if (proj.image) {
          mediaId = await uploadMedia(proj.image, proj.name.en || 'Project Image')
        }

        await payload.create({
          collection: 'projects',
          data: {
            name: proj.name.id || proj.name.en,
            slug: proj.slug,
            category: proj.category.en.toLowerCase().replace(/ /g, '-'),
            location: proj.location.id || proj.location.en,
            description: proj.description.id || proj.description.en,
            image: mediaId,
            scope: proj.scope.map(s => ({ item: s.id || s.en })),
            featured: proj.featured || false,
          },
        })
        seededProjects++
      }
    }

    // 4. Seed FAQs
    let seededFAQs = 0
    for (const group of faqData) {
      const catVal = group.category.en.toLowerCase()
      for (const item of group.items) {
        const existing = await payload.find({
          collection: 'faq',
          where: { question: { equals: item.question.id } },
        })

        if (existing.docs.length === 0) {
          await payload.create({
            collection: 'faq',
            data: {
              category: catVal,
              question: item.question.id || item.question.en,
              answer: item.answer.id || item.answer.en,
            },
          })
          seededFAQs++
        }
      }
    }

    // 5. Seed Blog Posts
    let seededBlogs = 0
    for (const blog of blogPosts) {
      const existing = await payload.find({
        collection: 'blog-posts',
        where: { slug: { equals: blog.slug } },
      })

      if (existing.docs.length === 0) {
        let mediaId = null
        if (blog.image) {
          mediaId = await uploadMedia(blog.image, blog.id.title || 'Blog Image')
        }

        await payload.create({
          collection: 'blog-posts',
          data: {
            title: blog.id.title || blog.en.title,
            slug: blog.slug,
            date: new Date(blog.date).toISOString(),
            author: blog.author,
            category: blog.category,
            image: mediaId,
            excerpt: blog.id.excerpt || blog.en.excerpt,
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [{ text: blog.id.content || blog.en.content, type: 'text' }],
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        })
        seededBlogs++
      }
    }

    return NextResponse.json({
      success: true,
      seeded: {
        products: seededProducts,
        services: seededServices,
        projects: seededProjects,
        faqs: seededFAQs,
        blogPosts: seededBlogs,
      },
    })
  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
