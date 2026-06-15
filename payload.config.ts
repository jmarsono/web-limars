import { buildConfig } from 'payload'
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { fileURLToPath } from 'url'

// Import Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Services } from './collections/Services'
import { Projects } from './collections/Projects'
import { FAQ } from './collections/FAQ'
import { BlogPosts } from './collections/BlogPosts'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [
    Users,
    Media,
    Products,
    Services,
    Projects,
    FAQ,
    BlogPosts,
    Pages,
  ],
  localization: {
    locales: [
      { label: 'Indonesian', code: 'id' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'id',
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || 'a-very-secret-key-123456',
  db: sqliteD1Adapter({
    push: true,
    binding: (() => {
      try {
        const cloudflareContext = (globalThis as any)[Symbol.for('cloudflare-context')]
        if (cloudflareContext?.env?.DB) {
          return cloudflareContext.env.DB
        }
      } catch (e) {
        // Fallback or build-time mock
      }
      return process.env.DB as any
    })(),
  }),
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.R2_BUCKET_NAME || 'limars-media',
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || 'local',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || 'local',
        },
        endpoint: process.env.R2_ENDPOINT || 'http://localhost:9000', // support local minio/emulator or remote R2 endpoint
        region: 'auto',
        forcePathStyle: true,
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
