import { GetStaticProps } from "next";

export const getBlogSlugStaticProps: GetStaticProps = async ({params}) => {

  console.log(params);
  
  return {
    props: {}
  }
}