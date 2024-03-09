export interface IChatCompletionRes {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: IChatCompletionChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

interface IChatCompletionChoice {
  index: number;
  message: {
    role: string;
    content: string;
  };
  finish_reason: string;
}
