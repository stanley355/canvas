import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import { TbProgress } from 'react-icons/tb';

import NextHead from '@/common/components/NextHead';
import { getBlogSlugStaticPaths } from '@/modules/blog/lib/getBlogSlugStaticPath'
import { getBlogSlugStaticProps } from '@/modules/blog/lib/getBlogSlugStaticProps';
import { IDatoBlogSchema } from '@/common/lib/api/dato/interfaces';
import Image from 'next/image';

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
    <div className='mt-16'>
      <NextHead pagesSchema={blogSchema.blog} />
      <div className='p-4'>
        <div className='mb-2'>{new Date(blogSchema.blog._updatedAt).toLocaleDateString('id-ID')}</div>
        <h1 className='text-3xl font-bold'>{blogSchema.blog.seo.title}</h1>
      </div>
      <img
        src={blogSchema.blog.heroImage.url}
        alt={blogSchema.blog.heroImage.title}
        width={blogSchema.blog.heroImage.width}
        height={blogSchema.blog.heroImage.height}
        className='w-full h-auto'
        loading='eager'
      />

      <div className='p-4' dangerouslySetInnerHTML={{__html: blogSchema.blog.content}} />
    </div>
  )
}

export default BlogSlug