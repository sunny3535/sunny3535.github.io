import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 mt-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col justify-between animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
          </div>
          <div className="h-4 bg-slate-200 rounded w-1/3 mt-4 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};