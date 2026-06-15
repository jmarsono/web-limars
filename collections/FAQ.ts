import { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Products', value: 'products' },
        { label: 'Services', value: 'services' },
        { label: 'Ordering', value: 'ordering' },
        { label: 'General', value: 'general' },
      ],
      required: true,
    },
    {
      name: 'question',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      localized: true,
    },
  ],
}
