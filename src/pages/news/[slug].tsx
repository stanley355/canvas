import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

const NewsSection = () => {
    return (
        <div>
            hi
        </div>
    )
};

export default NewsSection;

export const getStaticPaths: GetStaticPaths = () => {
    return {
      paths: [{params: {slug: 'politics'}}],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext)  =>{
    console.log(context.params);
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
  }
  