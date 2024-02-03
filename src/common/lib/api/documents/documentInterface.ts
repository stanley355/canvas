export interface IDocument {
  id: string
  user_id: string
  created_at: string
  updated_at: string
  name: string
  content: string | null 
  ai_completion: string | null 
}
