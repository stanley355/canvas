export interface ISubscription {
  id: string
  user_id: string
  topup_id: string
  created_at: string
  start_at: string
  end_at: string
  duration_type: string
  paid: boolean
  is_paylater: boolean
}