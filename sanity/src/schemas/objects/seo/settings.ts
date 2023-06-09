import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo.settings',
  title: 'SEO',
  type: 'object',
  description: 'Defaults for every page',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: `keywords`,
      title: `Keywords`,
      type: `array`,
      of: [{type: `string`}],
      options: {layout: `tags`},
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'altImage',
      description: 'Image should have a 1:1 aspect ratio, no larger that 512x512 pixels',
    }),
    defineField({
      name: `socialImage`,
      title: `Social image`,
      type: `altImage`,
      description: `Used for both search engine results and social cards. Image should have a 16:9 aspect ratio. eg. 1200 x 675 pixels`,
    }),
  ],
})
