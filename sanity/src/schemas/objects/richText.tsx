import {defineArrayMember, defineType} from 'sanity'

import ColorRenderer from '../../components/richText/ColorRenderer'
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: `Rich Text`,
  name: `richText`,
  type: `array`,
  of: [
    {
      title: `Block`,
      type: `block`,
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        // todo: add main h1 heading
        {title: `Normal`, value: `normal`},
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Heading 5', value: 'h5'},
        {title: 'Heading 6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: `Bullet`, value: `bullet`}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: `Strong`, value: `strong`},
          {title: `Emphasis`, value: `em`},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: `URL`,
            name: `link`,
            type: `object`,
            fields: [
              {
                name: `href`,
                title: `URL`,
                type: `string`,
              },
            ],
          },
          {
            name: `richColor`,
            title: `Color`,
            type: `reference`,
            to: [{type: `colorPalette`}],
            icon: () => `🎨`,
            components: {
              annotation: ColorRenderer
            },
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: `altImage`,
    }),
  ],
})