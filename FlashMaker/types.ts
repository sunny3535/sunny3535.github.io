export interface FlashcardData {
  question: string;
  answer: string;
}

export interface GenerationState {
  isLoading: boolean;
  error: string | null;
  hasGenerated: boolean;
}