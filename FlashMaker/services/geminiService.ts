import { GoogleGenAI, Type } from "@google/genai";
import { FlashcardData } from "../types";

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is not set in the environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const generateFlashcards = async (topic: string): Promise<FlashcardData[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `주제 "${topic}"에 대해 정확히 10개의 고품질 학습용 플래시카드를 생성해 주세요. 
      결과는 반드시 한국어로 작성되어야 합니다.
      각 플래시카드에는 간결한 질문과 명확하고 정확한 답변이 포함되어야 합니다.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: {
                type: Type.STRING,
                description: "플래시카드의 질문",
              },
              answer: {
                type: Type.STRING,
                description: "플래시카드의 정답",
              },
            },
            required: ["question", "answer"],
          },
        },
      },
    });

    if (!response.text) {
      throw new Error("Gemini로부터 응답을 받지 못했습니다.");
    }

    const data = JSON.parse(response.text) as FlashcardData[];
    return data;
  } catch (error) {
    console.error("플래시카드 생성 중 오류 발생:", error);
    throw error;
  }
};