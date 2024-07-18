import { IDatoBlogSchema } from '@/common/lib/api/dato/interfaces'

interface BlogSlugMainProps {
  blogSchema: IDatoBlogSchema
}

const BlogSlugMain = ({ blogSchema }: BlogSlugMainProps) => {
  return (
    <div className='lg:shadow-inner lg:rounded-lg lg:border lg:border-brand-primary h-fit mb-4'>
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

      <div className='p-4 [&_a]:underline [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:list-inside' dangerouslySetInnerHTML={{ __html: blogSchema.blog.content }} />
    </div>
  )
}

export default BlogSlugMain