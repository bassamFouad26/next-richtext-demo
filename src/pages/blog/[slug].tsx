import {client} from "../../client"
import {allBlogArticle} from "../../allBlogArticle"


export default function blog() {
  return (
    <>
      asd
    </>
  )
}


export async function getStaticProps({params:{slug}}) {
  const res= await  client.query({
        query: allBlogArticle,
        variables:{slug},
        fetchPolicy: "no-cache",
      })
      console.log(res)
  return {
    props: {
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  };
}
