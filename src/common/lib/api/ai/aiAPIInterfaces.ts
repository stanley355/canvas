export interface IChatCompletionRes {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: IChatCompletionChoice[];
  usage: IChatCompletionUsage;
}

interface IChatCompletionChoice {
  index: number;
  message: IChatCompletionMessage;
  finish_reason: string;
}

interface IChatCompletionMessage {
  role: string;
  content: string;
}

interface IChatCompletionUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
