export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type:'string',
      title: 'Resturant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Resturant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Resturant'
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Resturant'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Resturant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 star)',
      validation: (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error('Please enter a Value between 1 and 5')
    },
    {
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish'}]},]
    }
  ], 
}
