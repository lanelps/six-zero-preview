import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  description: 'Testimonial Clients',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'altImage',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'richText',
      description: '(Optional) Used in the Testimonial block',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      position: 'position',
      photo: 'photo',
    },
    prepare: ({title, photo, position}) => {
      return {
        title,
        subtitle: position,
        media: photo,
      }
    },
  },
})
