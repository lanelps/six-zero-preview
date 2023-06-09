import {defineField, defineType} from 'sanity'
import {TfiLayoutMediaLeft} from 'react-icons/tfi'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'textAndMedia',
  title: 'Text And Media',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
    defineField({
      name: 'mediaBlock',
      title: 'Media Block',
      type: 'mediaBlock',
    }),
    defineField({
      name: 'align',
      title: 'Media Align',
      type: 'string',
      initialValue: 'Left',
      description:
        'Align the media asset to the left or right of the text. Only applies to desktop.',
      options: {
        list: ['Left', 'Left (Full Bleed)', 'Right', 'Right (Full Bleed)'],
        layout: 'radio',
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
      text: 'text',
      image: 'mediaBlock.source.image',
      video: 'mediaBlock.source.video',
    },
    prepare: ({image, text, video}) => {
      const media = image?.asset || video?.poster?.asset
      return {
        title: 'Text And Media',
        subtitle: portableTextPreview(text),
        media: media || TfiLayoutMediaLeft,
      }
    },
  },
})
