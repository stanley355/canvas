export interface IStudent {
  id: string
  user_id: string
  student_id: string
  student_email: string
  student_card_img_url: string
  institution_level: string
  institution_name: string
  created_at: string
  updated_at: string
  free_discount_end_at: string
  half_discount_end_at: string
  student_application_valid: boolean
  student_application_invalid_reason: any
}
