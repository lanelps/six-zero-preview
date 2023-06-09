import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'formField.textarea',
  title: 'Textarea Field',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      placeholder: 'placeholder',
    },
    prepare: ({name, placeholder}) => {
      return {
        title: name || `Textarea Field`,
        subtitle: placeholder,
      }
    },
  },
})
