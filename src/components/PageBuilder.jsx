import { graphql } from "gatsby";

import { blockBuilder } from "../utils/blocks";

const PageBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default PageBuilder;

export const query = graphql`
  fragment PageBuilder on ContentfulTemplatePage {
    blocks {
      __typename

      ...BlockCaseStudy
      ...BlockContactCallout
      ...BlockContent
      ...BlockHeader
      ...BlockImageFullWidth
      ...BlockImageGrid
      ...BlockImageThreeColumns
      ...BlockImageTwoColumns
      ...BlockLogos
      ...BlockMultiSection
      ...BlockNextProject
      ...BlockOrderedList
      ...BlockPageTitle
      ...BlockProjectInfo
      ...BlockTestimonial
      ...BlockTextAndImage
    }
  }
`;
