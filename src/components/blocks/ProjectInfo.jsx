import React from "react";
import { graphql } from "gatsby";

const ProjectInfo = ({ data }) => {
  const { info, textColor, backgroundColor } = data;

  return (
    <ul
      className="block-project-info"
      style={{
        color: textColor?.value?.hex,
        backgroundColor: backgroundColor?.value?.hex,
      }}
    >
      {info.map((information) => (
        <li key={information?._key}>
          <h3 className="text-bold">{information?.title}</h3>
          <p className="text-normal">{information?.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectInfo;

export const query = graphql`
  fragment BlockProjectInfo on SanityProjectInfo {
    info {
      _key
      title
      text
    }
    textColor {
      value {
        hex
      }
    }
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
