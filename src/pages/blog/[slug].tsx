import { GetStaticPaths, GetStaticProps } from 'next'
import { getBlogSlugStaticPaths } from '@/modules/blog/lib/getBlogSlugStaticPath'
import { getBlogSlugStaticProps } from '@/modules/blog/lib/getBlogSlugStaticProps';

export const getStaticPaths: GetStaticPaths = getBlogSlugStaticPaths;
export const getStaticProps: GetStaticProps = getBlogSlugStaticProps;

const BlogSlug = () => {
  return (
    <div>

    </div>
  )
}

export default BlogSlug