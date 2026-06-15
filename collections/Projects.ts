import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Kitchen Set', value: 'kitchen-set' },
        { label: 'Ducting', value: 'ducting' },
        { label: 'Oven Installation', value: 'oven-installation' },
        { label: 'Gas Installation', value: 'gas-installation' },
        { label: 'Well Drilling', value: 'well-drilling' },
        { label: 'Electrical', value: 'electrical' },
      ],
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'scope',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
