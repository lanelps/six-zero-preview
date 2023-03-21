import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageTwoColumns = ({ data }) => {
  const { images } = data;

  return (
    <div className="block-image-two-columns">
      {images.map((image) => (
        <figure key={image?.id}>
          <Image src={image} alt={image?.title} />
        </figure>
      ))}
    </div>
  );
};

export default ImageTwoColumns;

export const query = graphql`
  fragment BlockImageTwoColumns on ContentfulBlockImageTwoColumns {
    images {
      id
      gatsbyImageData(
        quality: 100
        width: 1440
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
  }
`;
