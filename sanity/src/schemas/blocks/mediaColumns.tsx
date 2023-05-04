import {defineArrayMember, defineField, defineType} from 'sanity'
import ColmunsMedia from '../../components/ColumnsMedia'

export default defineType({
  name: 'mediaColumns',
  title: 'Media Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'mediaBlock',
        }),
      ],
      validation: (Rule) => Rule.required().max(3),
    }),
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare: ({columns}) => ({
      title: 'Media Columns',
      subtitle: `${columns.length} column${columns.length > 1 ? 's' : ''}`,
      media: () => <ColmunsMedia media={columns.map((media) => media?.source)} />,
    }),
  },
})
