import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'src',
      title: 'Src',
      type: 'url',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'altImage',
      description: 'Image to be shown while the video is downloading.',
    }),
    defineField({
      name: 'isIframe',
      title: 'Is i-frame',
      type: 'boolean',
      description: 'If the video link is of an i-frame, it will be rendered as such.',
      initialValue: false,
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'If set video will automatically be muted.',
      initialValue: true,
    }),
    defineField({
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'controls',
      title: 'Controls',
      type: 'boolean',
      description:
        'If Controls and Autoplay are both false, the user will not be able to manually start the video.',
      initialValue: true,
    }),
    defineField({
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
