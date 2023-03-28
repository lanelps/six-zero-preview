exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, printTypeDefinitions } = actions;
  //   printTypeDefinitions({ path: "./gatsbyTypeDefs.txt" });

  // Having to copy the type defs from the typeDefs.txt file, otherwise Contentful doesn't create the GrapphQL Schema entrires if there's no published content
  // Will have to do this for all other pages that page build and for every new block
  // all unions will have to be updated with the new block name. Ordered alphabetically
  const typeDefs = `
  union ContentfulBlockUnion = ContentfulBlockCaseStudy | ContentfulBlockContactCallout | ContentfulBlockContent | ContentfulBlockHeader | ContentfulBlockImageFullWidth | ContentfulBlockImageGrid | ContentfulBlockImageThreeColumns | ContentfulBlockImageTwoColumns | ContentfulBlockLogos | ContentfulBlockMultiSection | ContentfulBlockNextProject | ContentfulBlockOrderedList | ContentfulBlockPageTitle | ContentfulBlockProjectInfo | ContentfulBlockTestimonial | ContentfulBlockTextAndImage

union ContentfulMultiSectionBlockUnion = ContentfulBlockContent | ContentfulBlockImageFullWidth | ContentfulBlockOrderedList

union ContentfulRichTextEmbedUnion = ContentfulAsset | ContentfulHtmlEmbed


type ContentfulTemplatePage implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    slug: String
    blocks: [ContentfulBlockUnion] @link(by: "id", from: "blocks___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulTemplatePageSys
}

type ContentfulTemplatePageSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulTemplatePageSysContentType
}

type ContentfulTemplatePageSysContentType @derivedTypes {
    sys: ContentfulTemplatePageSysContentTypeSys
}

type ContentfulTemplatePageSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulTemplateBlog implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    slug: String
    date: Date @dateformat 
    author: ContentfulAuthor @link(by: "id", from: "author___NODE")
    excerpt: contentfulTemplateBlogExcerptTextNode @link(by: "id", from: "excerpt___NODE")
    featureImage: ContentfulAsset @link(by: "id", from: "featureImage___NODE")
    summary: contentfulTemplateBlogSummaryTextNode @link(by: "id", from: "summary___NODE")
    content: ContentfulTemplateBlogContent
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulTemplateBlogSys
}

type ContentfulTemplateBlogSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulTemplateBlogSysContentType
}

type ContentfulTemplateBlogSysContentType @derivedTypes {
    sys: ContentfulTemplateBlogSysContentTypeSys
}

type ContentfulTemplateBlogSysContentTypeSys {
    type: String
    linkType: String
    id: String
}

type contentfulTemplateBlogExcerptTextNode implements Node @derivedTypes @childOf(types: ["ContentfulTemplateBlog"]) @dontInfer {
    excerpt: String
    sys: contentfulTemplateBlogExcerptTextNodeSys
}

type contentfulTemplateBlogExcerptTextNodeSys {
    type: String
}

type contentfulTemplateBlogSummaryTextNode implements Node @derivedTypes @childOf(types: ["ContentfulTemplateBlog"]) @dontInfer {
    summary: String
    sys: contentfulTemplateBlogSummaryTextNodeSys
}

type contentfulTemplateBlogSummaryTextNodeSys {
    type: String
}

type ContentfulTemplateBlogContent {
    raw: String
    references: [ContentfulRichTextEmbedUnion] @link(by: "id", from: "references___NODE")
}




type ContentfulTemplateProject implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    slug: String
    blocks: [ContentfulBlockUnion] @link(by: "id", from: "blocks___NODE")
    block__next_project: [ContentfulBlockNextProject] @link(by: "id", from: "block: next project___NODE") @proxy(from: "block: next project___NODE")
    block__case_study: [ContentfulBlockCaseStudy] @link(by: "id", from: "block: case study___NODE") @proxy(from: "block: case study___NODE")
    description: contentfulTemplateProjectDescriptionTextNode @link(by: "id", from: "description___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulTemplateProjectSys
}

type ContentfulTemplateProjectSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulTemplateProjectSysContentType
}

type ContentfulTemplateProjectSysContentType @derivedTypes {
    sys: ContentfulTemplateProjectSysContentTypeSys
}

type ContentfulTemplateProjectSysContentTypeSys {
    type: String
    linkType: String
    id: String
}

type contentfulTemplateProjectDescriptionTextNode implements Node @derivedTypes @childOf(types: ["ContentfulTemplateProject"]) @dontInfer {
    description: String
    sys: contentfulTemplateProjectDescriptionTextNodeSys
}

type contentfulTemplateProjectDescriptionTextNodeSys {
    type: String
}




type ContentfulAuthor implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    name: String
    position: String
    photo: ContentfulAsset @link(by: "id", from: "photo___NODE")
    author: [ContentfulTemplateBlog] @link(by: "id", from: "author___NODE") @proxy(from: "author___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulAuthorSys
}

type ContentfulAuthorSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulAuthorSysContentType
}

type ContentfulAuthorSysContentType @derivedTypes {
    sys: ContentfulAuthorSysContentTypeSys
}

type ContentfulAuthorSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulPerson implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    name: String
    position: String
    photo: ContentfulAsset @link(by: "id", from: "photo___NODE")
    block__testimonial: [ContentfulBlockTestimonial] @link(by: "id", from: "block: testimonial___NODE") @proxy(from: "block: testimonial___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulPersonSys
}

type ContentfulPersonSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulPersonSysContentType
}

type ContentfulPersonSysContentType @derivedTypes {
    sys: ContentfulPersonSysContentTypeSys
}

type ContentfulPersonSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockCaseStudy implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    project: ContentfulTemplateProject @link(by: "id", from: "project___NODE")
    summary: contentfulBlockCaseStudySummaryTextNode @link(by: "id", from: "summary___NODE")
    image: ContentfulAsset @link(by: "id", from: "image___NODE")
    alignment: String
    backgroundColor: String
    textColor: String
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockCaseStudySys
}

type ContentfulBlockCaseStudySys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockCaseStudySysContentType
}

type ContentfulBlockCaseStudySysContentType @derivedTypes {
    sys: ContentfulBlockCaseStudySysContentTypeSys
}

type ContentfulBlockCaseStudySysContentTypeSys {
    type: String
    linkType: String
    id: String
}

type contentfulBlockCaseStudySummaryTextNode implements Node @derivedTypes @childOf(types: ["ContentfulBlockCaseStudy"]) @dontInfer {
    summary: String
    sys: contentfulBlockCaseStudySummaryTextNodeSys
}

type contentfulBlockCaseStudySummaryTextNodeSys {
    type: String
}




type ContentfulBlockContactCallout implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    heading: String
    subHeading: String
    buttonText: String
    buttonUrl: String
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockContactCalloutSys
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
}

type ContentfulBlockContactCalloutSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockContactCalloutSysContentType
}

type ContentfulBlockContactCalloutSysContentType @derivedTypes {
    sys: ContentfulBlockContactCalloutSysContentTypeSys
}

type ContentfulBlockContactCalloutSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockContent implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    text: ContentfulBlockContentText
    hasBackground: Boolean
    block__multi_section: [ContentfulBlockMultiSection] @link(by: "id", from: "block: multi section___NODE") @proxy(from: "block: multi section___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockContentSys
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
}

type ContentfulBlockContentText {
    raw: String
}

type ContentfulBlockContentSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockContentSysContentType
}

type ContentfulBlockContentSysContentType @derivedTypes {
    sys: ContentfulBlockContentSysContentTypeSys
}

type ContentfulBlockContentSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockHeader implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    content: ContentfulBlockHeaderContent
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockHeaderSys
}

type ContentfulBlockHeaderContent {
    raw: String
}

type ContentfulBlockHeaderSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockHeaderSysContentType
}

type ContentfulBlockHeaderSysContentType @derivedTypes {
    sys: ContentfulBlockHeaderSysContentTypeSys
}

type ContentfulBlockHeaderSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockImageFullWidth implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    source: ContentfulAsset @link(by: "id", from: "source___NODE")
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    block__multi_section: [ContentfulBlockMultiSection] @link(by: "id", from: "block: multi section___NODE") @proxy(from: "block: multi section___NODE")
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockImageFullWidthSys
}

type ContentfulBlockImageFullWidthSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockImageFullWidthSysContentType
}

type ContentfulBlockImageFullWidthSysContentType @derivedTypes {
    sys: ContentfulBlockImageFullWidthSysContentTypeSys
}

type ContentfulBlockImageFullWidthSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockImageGrid implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
  contentful_id: String!
  node_locale: String!
  title: String
  style: String
  images: [ContentfulAsset] @link(by: "id", from: "images___NODE")
  template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
  template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
  spaceId: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  sys: ContentfulBlockImageGridSys
}

type ContentfulBlockImageGridSys @derivedTypes {
  type: String
  revision: Int
  contentType: ContentfulBlockImageGridSysContentType
}

type ContentfulBlockImageGridSysContentType @derivedTypes {
  sys: ContentfulBlockImageGridSysContentTypeSys
}

type ContentfulBlockImageGridSysContentTypeSys {
  type: String
  linkType: String
  id: String
}




type ContentfulBlockImageThreeColumns implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
  contentful_id: String!
  node_locale: String!
  title: String
  images: [ContentfulAsset] @link(by: "id", from: "images___NODE")
  template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
  template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
  spaceId: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  sys: ContentfulBlockImageThreeColumnsSys
}

type ContentfulBlockImageThreeColumnsSys @derivedTypes {
  type: String
  revision: Int
  contentType: ContentfulBlockImageThreeColumnsSysContentType
}

type ContentfulBlockImageThreeColumnsSysContentType @derivedTypes {
  sys: ContentfulBlockImageThreeColumnsSysContentTypeSys
}

type ContentfulBlockImageThreeColumnsSysContentTypeSys {
  type: String
  linkType: String
  id: String
}




type ContentfulBlockImageTwoColumns implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    images: [ContentfulAsset] @link(by: "id", from: "images___NODE")
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockImageTwoColumnsSys
}

type ContentfulBlockImageTwoColumnsSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockImageTwoColumnsSysContentType
}

type ContentfulBlockImageTwoColumnsSysContentType @derivedTypes {
    sys: ContentfulBlockImageTwoColumnsSysContentTypeSys
}

type ContentfulBlockImageTwoColumnsSysContentTypeSys {
    type: String
    linkType: String
    id: String
}



type ContentfulBlockLogos implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    logos: [ContentfulAsset] @link(by: "id", from: "logos___NODE")
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockLogosSys
}

type ContentfulBlockLogosSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockLogosSysContentType
}

type ContentfulBlockLogosSysContentType @derivedTypes {
    sys: ContentfulBlockLogosSysContentTypeSys
}

type ContentfulBlockLogosSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockMultiSection implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    blocks: [ContentfulMultiSectionBlockUnion] @link(by: "id", from: "blocks___NODE")
    hasBackground: Boolean
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockMultiSectionSys
}

type ContentfulBlockMultiSectionSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockMultiSectionSysContentType
}

type ContentfulBlockMultiSectionSysContentType @derivedTypes {
    sys: ContentfulBlockMultiSectionSysContentTypeSys
}

type ContentfulBlockMultiSectionSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockNextProject implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
  contentful_id: String!
  node_locale: String!
  title: String
  project: ContentfulTemplateProject @link(by: "id", from: "project___NODE")
  coverImage: ContentfulAsset @link(by: "id", from: "coverImage___NODE")
  template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
  spaceId: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  sys: ContentfulBlockNextProjectSys
}

type ContentfulBlockNextProjectSys @derivedTypes {
  type: String
  revision: Int
  contentType: ContentfulBlockNextProjectSysContentType
}

type ContentfulBlockNextProjectSysContentType @derivedTypes {
  sys: ContentfulBlockNextProjectSysContentTypeSys
}

type ContentfulBlockNextProjectSysContentTypeSys {
  type: String
  linkType: String
  id: String
}




type ContentfulBlockOrderedList implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    listItems: [ContentfulListItem] @link(by: "id", from: "listItems___NODE")
    block__multi_section: [ContentfulBlockMultiSection] @link(by: "id", from: "block: multi section___NODE") @proxy(from: "block: multi section___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockOrderedListSys
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
}

type ContentfulBlockOrderedListSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockOrderedListSysContentType
}

type ContentfulBlockOrderedListSysContentType @derivedTypes {
    sys: ContentfulBlockOrderedListSysContentTypeSys
}

type ContentfulBlockOrderedListSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockPageTitle implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    content: ContentfulBlockPageTitleContent
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockPageTitleSys
}

type ContentfulBlockPageTitleSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockPageTitleSysContentType
}

type ContentfulBlockPageTitleSysContentType @derivedTypes {
    sys: ContentfulBlockPageTitleSysContentTypeSys
}

type ContentfulBlockPageTitleSysContentTypeSys {
    type: String
    linkType: String
    id: String
}

type ContentfulBlockPageTitleContent @derivedTypes {
    raw: String
}



type ContentfulBlockProjectInfo implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    info: [ContentfulTitleText] @link(by: "id", from: "info___NODE")
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockProjectInfoSys
}

type ContentfulBlockProjectInfoSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockProjectInfoSysContentType
}

type ContentfulBlockProjectInfoSysContentType @derivedTypes {
    sys: ContentfulBlockProjectInfoSysContentTypeSys
}

type ContentfulBlockProjectInfoSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulBlockTestimonial implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
  contentful_id: String!
  node_locale: String!
  title: String
  quote: ContentfulBlockTestimonialQuote
  person: ContentfulPerson @link(by: "id", from: "person___NODE")
  template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
  template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
  spaceId: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  sys: ContentfulBlockTestimonialSys
}

type ContentfulBlockTestimonialQuote {
  raw: String
}

type ContentfulBlockTestimonialSys @derivedTypes {
  type: String
  revision: Int
  contentType: ContentfulBlockTestimonialSysContentType
}

type ContentfulBlockTestimonialSysContentType @derivedTypes {
  sys: ContentfulBlockTestimonialSysContentTypeSys
}

type ContentfulBlockTestimonialSysContentTypeSys {
  type: String
  linkType: String
  id: String
}




type ContentfulBlockTextAndImage implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    hasBackground: Boolean
    imageAlign: String
    image: ContentfulAsset @link(by: "id", from: "image___NODE")
    text: ContentfulBlockTextAndImageText
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockTextAndImageSys
    template__page: [ContentfulTemplatePage] @link(by: "id", from: "template: page___NODE") @proxy(from: "template: page___NODE")
    template__project: [ContentfulTemplateProject] @link(by: "id", from: "template: project___NODE") @proxy(from: "template: project___NODE")
}

type ContentfulBlockTextAndImageText {
    raw: String
}

type ContentfulBlockTextAndImageSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockTextAndImageSysContentType
}

type ContentfulBlockTextAndImageSysContentType @derivedTypes {
    sys: ContentfulBlockTextAndImageSysContentTypeSys
}

type ContentfulBlockTextAndImageSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulListItem implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    block__ordered_list: [ContentfulBlockOrderedList] @link(by: "id", from: "block: ordered list___NODE") @proxy(from: "block: ordered list___NODE")
    text: contentfulListItemTextTextNode @link(by: "id", from: "text___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulListItemSys
}

type contentfulListItemTextTextNode implements Node @derivedTypes @childOf(types: ["ContentfulListItem"]) @dontInfer {
    text: String
    sys: contentfulListItemTextTextNodeSys
}

type contentfulListItemTextTextNodeSys {
    type: String
}

type ContentfulListItemSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulListItemSysContentType
}

type ContentfulListItemSysContentType @derivedTypes {
    sys: ContentfulListItemSysContentTypeSys
}

type ContentfulListItemSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulTitleText implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    text: String
    block__project_info: [ContentfulBlockProjectInfo] @link(by: "id", from: "block: project info___NODE") @proxy(from: "block: project info___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulTitleTextSys
}

type ContentfulTitleTextSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulTitleTextSysContentType
}

type ContentfulTitleTextSysContentType @derivedTypes {
    sys: ContentfulTitleTextSysContentTypeSys
}

type ContentfulTitleTextSysContentTypeSys {
    type: String
    linkType: String
    id: String
}




type ContentfulAsset implements ContentfulReference & Node & RemoteFile @derivedTypes @dontInfer {
  contentful_id: String!
  gatsbyImageData(
    """
    The layout for the image.
    FIXED: A static image sized, that does not resize according to the screen width
    FULL_WIDTH: The image resizes to fit its container. Pass a "sizes" option if
    it isn't going to be the full width of the screen.
    CONSTRAINED: Resizes to fit its container, up to a maximum width, at which point it will remain fixed in size.
    """
    layout: GatsbyImageLayout

    """
    The display width of the generated image for layout = FIXED, and the display
    width of the largest image for layout = CONSTRAINED.
    The actual largest image resolution will be this value multiplied by the largest value in outputPixelDensities
    Ignored if layout = FLUID.
    """
    width: Int

    """
    If set, the height of the generated image. If omitted, it is calculated from
    the supplied width, matching the aspect ratio of the source image.
    """
    height: Int

    """
    If set along with width or height, this will set the value of the other
    dimension to match the provided aspect ratio, cropping the image if needed.
    If neither width or height is provided, height will be set based on the intrinsic width of the source image.
    """
    aspectRatio: Float

    """
    Format of generated placeholder image, displayed while the main image loads.
    BLURRED: a blurred, low resolution image, encoded as a base64 data URI.
    DOMINANT_COLOR: a solid color, calculated from the dominant color of the image (default).
    TRACED_SVG: deprecated. Will use DOMINANT_COLOR.
    NONE: no placeholder. Set the argument "backgroundColor" to use a fixed background color.
    """
    placeholder: GatsbyImagePlaceholder

    """
    The image formats to generate. Valid values are AUTO (meaning the same
    format as the source image), JPG, PNG, WEBP and AVIF.
    The default value is [AUTO, WEBP], and you should rarely need to change
    this. Take care if you specify JPG or PNG when you do
    not know the formats of the source images, as this could lead to unwanted
    results such as converting JPEGs to PNGs. Specifying
    both PNG and JPG is not supported and will be ignored.
    """
    formats: [GatsbyImageFormat] = [NO_CHANGE, WEBP]

    """
    A list of image pixel densities to generate for FIXED and CONSTRAINED
    images. You should rarely need to change this. It will never generate images
    larger than the source, and will always include a 1x image.
    Default is [ 1, 2 ] for fixed images, meaning 1x, 2x, 3x, and [0.25, 0.5, 1,
    2] for fluid. In this case, an image with a fluid layout and width = 400
    would generate images at 100, 200, 400 and 800px wide.
    """
    outputPixelDensities: [Float]

    """
    Specifies the image widths to generate. You should rarely need to change
    this. For FIXED and CONSTRAINED images it is better to allow these to be
    determined automatically,
    based on the image size. For FULL_WIDTH images this can be used to override
    the default, which is [750, 1080, 1366, 1920].
    It will never generate any images larger than the source.
    """
    breakpoints: [Int]

    """
    The "sizes" property, passed to the img tag. This describes the display size of the image.
    This does not affect the generated images, but is used by the browser to
    decide which images to download. You can leave this blank for fixed images,
    or if the responsive image
    container will be the full width of the screen. In these cases we will generate an appropriate value.
    """
    sizes: String

    """
    Background color applied to the wrapper, or when "letterboxing" an image to another aspect ratio.
    """
    backgroundColor: String
    jpegProgressive: Boolean = true
    resizingBehavior: ImageResizingBehavior
    cropFocus: ContentfulImageCropFocus

    """
    Desired corner radius in pixels. Results in an image with rounded corners.
    Pass '-1' for a full circle/ellipse.
    """
    cornerRadius: Int
    quality: Int = 50
  ): GatsbyImageData!
  localFile: File @link(from: "fields.localFile", by: "id")
  spaceId: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  file: ContentfulAssetFile
  title: String
  description: String
  node_locale: String
  sys: ContentfulAssetSys
  url: String
  placeholderUrl: String
  mimeType: String
  filename: String
  width: Int
  height: Int
  size: Int
  fields: ContentfulAssetFields
}

enum GatsbyImageLayout {
  FIXED
  FULL_WIDTH
  CONSTRAINED
}

enum GatsbyImagePlaceholder {
  DOMINANT_COLOR
  TRACED_SVG
  BLURRED
  NONE
}

enum GatsbyImageFormat {
  NO_CHANGE
  AUTO
  JPG
  PNG
  WEBP
  AVIF
}

type ContentfulAssetFile @derivedTypes {
  url: String
  details: ContentfulAssetFileDetails
  fileName: String
  contentType: String
}

type ContentfulAssetFileDetails @derivedTypes {
  size: Int
  image: ContentfulAssetFileDetailsImage
}

type ContentfulAssetFileDetailsImage {
  width: Int
  height: Int
}

type ContentfulAssetSys {
  type: String
  revision: Int
}

type ContentfulAssetFields {
  localFile: String
}




type ContentfulHtmlEmbed implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
  contentful_id: String!
  node_locale: String!
  title: String
  embedCode: contentfulHtmlEmbedEmbedCodeTextNode @link(by: "id", from: "embedCode___NODE")
  spaceId: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  sys: ContentfulHtmlEmbedSys
}

type contentfulHtmlEmbedEmbedCodeTextNode implements Node @derivedTypes @childOf(types: ["ContentfulHtmlEmbed"]) @dontInfer {
  embedCode: String
  sys: contentfulHtmlEmbedEmbedCodeTextNodeSys
}

type contentfulHtmlEmbedEmbedCodeTextNodeSys {
  type: String
}

type ContentfulHtmlEmbedSys @derivedTypes {
  type: String
  revision: Int
  contentType: ContentfulHtmlEmbedSysContentType
}

type ContentfulHtmlEmbedSysContentType @derivedTypes {
  sys: ContentfulHtmlEmbedSysContentTypeSys
}

type ContentfulHtmlEmbedSysContentTypeSys {
  type: String
  linkType: String
  id: String
}
  `;

  createTypes(typeDefs);
};
