import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'media',
      options: {
        collapsible: false,
      },
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
      image: 'source.image',
      video: 'source.video',
    },
    prepare: ({image, video}) => {
      const media = image.asset || video.poster.asset
      const alt = image.alt || video.poster.alt

      return {
        title: alt || 'Media Block',
        media,
      }
    },
  },
})