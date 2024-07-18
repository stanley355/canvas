import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import { TbProgress } from 'react-icons/tb';

import NextHead from '@/common/components/NextHead';
import { getBlogSlugStaticPaths } from '@/modules/blog/lib/getBlogSlugStaticPath'
import { getBlogSlugStaticProps } from '@/modules/blog/lib/getBlogSlugStaticProps';
import { IDatoBlogSchema } from '@/common/lib/api/dato/interfaces';
import Image from 'next/image';
import BlogSlugMain from '@/modules/blog/components/slug/BlogSlugMain';

export const getStaticPaths: GetStaticPaths = getBlogSlugStaticPaths;
export const getStaticProps: GetStaticProps = getBlogSlugStaticProps;

interface BlogSlugProps {
  blogSchema: IDatoBlogSchema
}

const BlogSlug = ({ blogSchema }: BlogSlugProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className='flex flex-col items-center justify-center h-screen'>
      <TbProgress className='animate-spin text-5xl mb-4' />
      <div className='text-2xl'>Loading...</div>
    </div>
  }

  return (
    <div className='mt-16 lg:mt-0'>
      <NextHead pagesSchema={blogSchema.blog} />
      <div className='lg:container lg:mx-auto lg:grid lg:grid-cols-[66%_33%] gap-[1%]'>
        <BlogSlugMain blogSchema={blogSchema} />
        <div>woi</div>
      </div>
    </div>
  )
}

export default BlogSlug