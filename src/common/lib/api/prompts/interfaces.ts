export interface IPrompt {
  id: number;
  user_id: string;
  created_at: string;
  prompt_token: number;
  completion_token: number;
  prompt_text: string;
  completion_text: string;
  total_token: number;
  total_cost: number;
  instruction: string;
  prompt_type: string;
}
