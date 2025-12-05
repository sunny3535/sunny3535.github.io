import React, { useState } from 'react';
import { FlashcardData } from '../types';

interface FlashcardProps {
  data: FlashcardData;
  index: number;
}

export const Flashcard: React.FC<FlashcardProps> = ({ data, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group h-64 w-full cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div 
        className={`relative h-full w-full transition-all duration-500 transform-style-3d shadow-xl rounded-2xl ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side (Question) */}
        <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center bg-white p-6 backface-hidden rounded-2xl border border-slate-200">
          <div className="absolute top-4 left-4 text-xs font-bold text-indigo-500 tracking-wider">
            카드 {index + 1}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-slate-800 leading-snug">
              {data.question}
            </h3>
            <p className="mt-4 text-sm text-slate-400 font-medium animate-pulse">
              클릭하여 뒤집기
            </p>
          </div>
        </div>

        {/* Back Side (Answer) */}
        <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center bg-indigo-600 p-6 backface-hidden rotate-y-180 rounded-2xl text-white">
          <div className="absolute top-4 left-4 text-xs font-bold text-indigo-200 tracking-wider">
            정답
          </div>
          <div className="text-center overflow-y-auto max-h-full w-full scrollbar-hide">
            <p className="text-lg leading-relaxed">
              {data.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};