import { client } from "../../client";
import { allBlogArticle } from "../../gql/query/allBlogArticle";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

export default function BlogPage({ allBlogArticle }) {
  return (
    <div>
      <RichText content={allBlogArticle?.node?.text?.json?.content} />
    </div>
  );
}

// This block could be exported from utils folder , acting as a global function
const RichText = ({ content }) => {
  return <RichTextRenderer node={{ type: "doc", content }} />;
};

export async function getStaticProps({ params: { slug } }) {
  const res = await client.query({
    query: allBlogArticle,
    variables: { slug },
    fetchPolicy: "no-cache",
  });
  return {
    props: {
      allBlogArticle: res.data.allBlogArticle.edges[0],
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  };
}
