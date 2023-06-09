import {defineField, defineType} from 'sanity'
import {MdOutlineReviews} from 'react-icons/md'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'person',
      title: 'Person',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: 'person',
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
  ],
  preview: {
    select: {
      name: 'person.name',
      photo: 'person.photo',
      quote: 'person.quote',
    },
    prepare: ({name, photo, quote}) => ({
      title: 'Testimonial',
      subtitle: name + `: ` + portableTextPreview(quote),
      media: photo || MdOutlineReviews,
    }),
  },
})
