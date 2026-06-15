import { CollectionConfig, Block } from 'payload'

const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'subheadline', type: 'textarea', localized: true },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media', required: true },
    { name: 'primaryButtonText', type: 'text', localized: true },
    { name: 'primaryButtonUrl', type: 'text' },
    { name: 'secondaryButtonText', type: 'text', localized: true },
    { name: 'secondaryButtonUrl', type: 'text' },
  ],
}

const StatsBlock: Block = {
  slug: 'stats',
  labels: {
    singular: 'Stats Section',
    plural: 'Stats Sections',
  },
  fields: [
    {
      name: 'statsList',
      type: 'array',
      required: true,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true, localized: true },
      ],
    },
  ],
}

const ServicesSectionBlock: Block = {
  slug: 'servicesSection',
  labels: {
    singular: 'Services Grid',
    plural: 'Services Grids',
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'text', localized: true },
  ],
}

const ProductsSectionBlock: Block = {
  slug: 'productsSection',
  labels: {
    singular: 'Products Showcase',
    plural: 'Products Showcases',
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'text', localized: true },
    { name: 'limit', type: 'number', defaultValue: 6 },
  ],
}

const ProjectsSectionBlock: Block = {
  slug: 'projectsSection',
  labels: {
    singular: 'Projects Gallery',
    plural: 'Projects Galleries',
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'text', localized: true },
  ],
}

const WhyChooseUsBlock: Block = {
  slug: 'whyChooseUs',
  labels: {
    singular: 'Why Choose Us',
    plural: 'Why Choose Us Sections',
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'points',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', required: true, localized: true },
      ],
    },
  ],
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock,
        StatsBlock,
        ServicesSectionBlock,
        ProductsSectionBlock,
        ProjectsSectionBlock,
        WhyChooseUsBlock,
      ],
    },
  ],
}
