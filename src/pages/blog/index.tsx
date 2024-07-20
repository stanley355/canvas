import { getBlogServerSideProps, IDatoBlogHome } from '@/modules/blog/lib/getBlogServerSideProps'
import { GetServerSideProps } from 'next'
import Link from 'next/link';
import React from 'react'

export const getServerSideProps: GetServerSideProps = getBlogServerSideProps;



const Blog = ({allBlogs}: IDatoBlogHome) => {
  
  return (
    <div className='mt-16 text-sm p-4 mb-8 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:container lg:mx-auto'>
      {allBlogs?.map(({seo, slug})=> <Link href={`/blog/${slug}`} className='mb-8 border border-brand-primary rounded-lg hover:underline' key={seo.title}>
        <img src={seo.image.url} alt={seo.image.alt} width={seo.image.width} height={seo.image.height} className='w-full h-40 lg rounded-md' />
        <div className='p-4'>
          <div className='font-bold text-lg'>{seo.title}</div>
          <div className='text-gray-700'>{seo.description}</div>
        </div>
      </Link> )}
    </div>
  )
}

export default Blog