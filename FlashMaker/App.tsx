import React, { useState } from 'react';
import { generateFlashcards } from './services/geminiService';
import { FlashcardData, GenerationState } from './types';
import { Flashcard } from './components/Flashcard';
import { LoadingSkeleton } from './components/LoadingSkeleton';

const App: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [state, setState] = useState<GenerationState>({
    isLoading: false,
    error: null,
    hasGenerated: false
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setState({ isLoading: true, error: null, hasGenerated: false });
    setFlashcards([]);

    try {
      const data = await generateFlashcards(topic);
      setFlashcards(data);
      setState({ isLoading: false, error: null, hasGenerated: true });
    } catch (err) {
      setState({
        isLoading: false,
        error: "플래시카드를 생성하는 도중 오류가 발생했습니다. 다른 주제로 시도하거나 잠시 후 다시 시도해주세요.",
        hasGenerated: false
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 flex flex-col">
      {/* Header & Input Section */}
      <div className="w-full bg-white shadow-sm border-b border-slate-100 z-10 sticky top-0">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              Gemini <span className="text-indigo-600">플래시 메이커</span>
            </h1>
            <p className="text-slate-500 text-lg">
              AI 기반 플래시카드로 모든 주제를 즉시 마스터하세요.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 items-stretch max-w-2xl mx-auto">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="학습할 주제를 입력하세요 (예: '광합성', '제2차 세계 대전', '리액트 훅')"
              className="flex-1 px-6 py-4 text-lg rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-sm"
              disabled={state.isLoading}
            />
            <button
              type="submit"
              disabled={state.isLoading || !topic.trim()}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all active:scale-95 flex items-center justify-center min-w-[160px]"
            >
              {state.isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  생성 중...
                </span>
              ) : (
                "생성하기"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 pb-20">
        
        {/* Error State */}
        {state.error && (
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700 animate-fadeIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>{state.error}</p>
          </div>
        )}

        {/* Loading State */}
        {state.isLoading && <LoadingSkeleton />}

        {/* Empty State / Initial View */}
        {!state.hasGenerated && !state.isLoading && !state.error && (
          <div className="flex flex-col items-center justify-center h-[50vh] text-slate-400">
            <svg className="w-24 h-24 mb-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <p className="text-xl font-medium">위의 입력창에 주제를 입력하여 학습을 시작하세요</p>
          </div>
        )}

        {/* Results Grid */}
        {state.hasGenerated && !state.isLoading && (
          <div className="animate-fadeIn">
             <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-2xl font-bold text-slate-800">
                  "{topic}" 관련 플래시카드
                </h2>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {flashcards.length}개의 카드
                </span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {flashcards.map((card, index) => (
                <Flashcard key={index} data={card} index={index} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
        <p>© {new Date().getFullYear()} Gemini 플래시 메이커. Google Gemini 제공.</p>
      </footer>
    </div>
  );
};

export default App;