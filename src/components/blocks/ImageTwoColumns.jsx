import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageTwoColumns = ({ data }) => {
  const { images } = data;

  return (
    <div className="block-image-two-columns">
      {images.map((image) => (
        <figure key={image?._key}>
          <Image src={image?.source?.asset} alt={image?.source?.alt} />
        </figure>
      ))}
    </div>
  );
};

export default ImageTwoColumns;

export const query = graphql`
  fragment BlockImageTwoColumns on SanityImageTwoColumns {
    images {
      _key
      source {
        asset {
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        alt
      }
    }
  }
`;
