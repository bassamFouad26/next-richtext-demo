import { gql } from "@apollo/client";

export const allBlogArticle = gql`
query allBlogArticle($slug: String) {
  allBlogArticle(where: { slug: { eq: $slug } }) {
    edges {
      node {
        text {
          json
        }
        title
        slug
        id
      }
    }
  }
}
`;
