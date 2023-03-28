import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <ul className="blog-grid">
        {data.allContentfulTemplateBlog.nodes.map((node) => (
          <li>
            <Link
              to={`/blog/${node.slug}`}
              key={node.id}
              className="card card--post"
            >
              <div className="card-image">
                {node.featureImage ? (
                  <GatsbyImage
                    image={getImage(node.featureImage)}
                    alt={node.featureImage.description}
                  />
                ) : null}
              </div>
              <div className="card-copy">
                <h2 className="h6">{node.title}</h2>
                {node.excerpt ? <p>{node.excerpt.excerpt}</p> : null}
                <p className="accent accent--grey-normal">
                  Published {node.date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export function Head() {
  return (
    <>
      <title>Blog | Sixzero</title>
      <body className="page-blog has-no-box-shadow" />
    </>
  );
}

export const query = graphql`
  query {
    allContentfulTemplateBlog(sort: { date: DESC }) {
      nodes {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        excerpt {
          excerpt
        }
        featureImage {
          description
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
