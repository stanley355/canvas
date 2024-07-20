import { getBlogServerSideProps, IDatoBlogHome } from '@/modules/blog/lib/getBlogServerSideProps'
import { GetServerSideProps } from 'next'
import Link from 'next/link';
import React from 'react'
import { FaBlog } from 'react-icons/fa6';

export const getServerSideProps: GetServerSideProps = getBlogServerSideProps;



const Blog = ({ allBlogs }: IDatoBlogHome) => {

  return (
    <div className='my-16 text-sm px-4 lg:px-0 lg:my-0 lg:container lg:mx-auto'>
      <div className="flex border border-brand-primary items-center gap-1 lg:justify-center rounded-lg p-2 bg-blue-100 mb-4 w-fit">
        <FaBlog />
        Blog
      </div>
      <div className='lg:grid lg:grid-cols-3 lg:gap-4 '>
        {allBlogs?.map(({ seo, slug }) =>
          <Link href={`/blog/${slug}`} className='flex h-40 mb-4 gap-4 shadow p-4 rounded-lg hover:underline hover:bg-gradient-to-b from-white to-blue-100' key={seo.title}>
            <img
              src={seo.image.url}
              alt={seo.image.alt}
              width={seo.image.width}
              height={seo.image.height}
              className='w-[33%] rounded-lg'
            />
            <div className='overflow-hidden text-ellipsis'>
              <div className='font-bold text-base mb-2'>{seo.title}</div>
              <div className='text-gray-700 text-xs text-justify'>{seo.description}</div>
            </div>
          </Link>)}

      </div>
    </div>
  )
}

export default Blog