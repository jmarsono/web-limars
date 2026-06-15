import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
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
        { label: 'Traditional Stoves', value: 'traditional-stoves' },
        { label: 'Regional Ovens', value: 'regional-ovens' },
        { label: 'Modern Ovens', value: 'modern-ovens' },
        { label: 'Kitchen Equipment', value: 'kitchen-equipment' },
        { label: 'Coffee Shop Equipment', value: 'coffee-shop-equipment' },
      ],
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'specs',
      type: 'group',
      fields: [
        { name: 'material', type: 'text', localized: true },
        { name: 'burners', type: 'text', localized: true },
        { name: 'btuOutput', type: 'text' },
        { name: 'fuelType', type: 'text', localized: true },
        { name: 'dimensions', type: 'text', localized: true },
        { name: 'capacity', type: 'text', localized: true },
        { name: 'maxTemperature', type: 'text' },
        { name: 'temperatureRange', type: 'text' },
        { name: 'power', type: 'text', localized: true },
        { name: 'customizable', type: 'text', localized: true },
        { name: 'features', type: 'text', localized: true },
        { name: 'decks', type: 'text', localized: true },
        { name: 'modes', type: 'text', localized: true },
        { name: 'surfaceArea', type: 'text' },
        { name: 'bowls', type: 'text', localized: true },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
