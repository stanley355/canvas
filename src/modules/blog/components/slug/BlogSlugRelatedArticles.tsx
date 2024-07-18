import NextLink from "@/common/components/NextLink"
import { IDatoBlogSchema } from "@/common/lib/api/dato/interfaces"

interface BlogSlugRelatedArticlesProps {
  blogSchema:IDatoBlogSchema 
}


const BlogSlugRelatedArticles = ({blogSchema}: BlogSlugRelatedArticlesProps) => {
  
  return (
    <div className="shadow-inner h-fit rounded-lg lg:border lg:border-brand-primary">
      <div className="p-4 font-semibold border-b">Related Articles</div>
      <div>
        {blogSchema.blog.relatedArticles.map((article)=> 
        <NextLink variant="none" href={`/blog/${article.slug}`} key={article.id} className="hover:underline">
          <div className="text-blue-500 px-4 pt-2">{article.title}</div>
          <div className="px-4 pb-2">{new Date(article._updatedAt).toLocaleString('id-ID')}</div>
        </NextLink> )}
      </div>
    </div>
  )
}

export default BlogSlugRelatedArticles