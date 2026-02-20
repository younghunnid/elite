
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Education', 'Tips', 'News', 'Security'];
  const filteredPosts = filter === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 gap-8 text-center md:text-left">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter leading-none">
              Elite <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl text-base sm:text-lg lg:text-xl">
              Technical articles, school updates, and industry insights from the ECS faculty.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 bg-white dark:bg-slate-900 p-2 rounded-[1.5rem] sm:rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                  filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col h-full">
                <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                  <span className="absolute top-6 sm:top-8 left-6 sm:left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-blue-900 dark:text-blue-400 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest shadow-xl">
                    {post.category}
                  </span>
                </div>
                <div className="p-8 sm:p-12 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <p className="text-slate-400 dark:text-slate-500 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">{post.date}</p>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4 sm:mb-6 uppercase tracking-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mb-8 sm:mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 sm:pt-8 border-t border-slate-50 dark:border-white/5 flex items-center text-blue-950 dark:text-blue-400 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] group/btn">
                    Read Story 
                    <svg className="w-4 h-4 sm:w-5 h-5 ml-3 sm:ml-4 transform group-hover/btn:translate-x-3 transition-transform text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 sm:py-40 bg-white dark:bg-slate-900 rounded-[3rem] sm:rounded-[5rem] border-4 border-dashed border-slate-100 dark:border-white/5 flex flex-col items-center px-6 transition-colors duration-300">
            <div className="w-16 h-16 sm:w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-6 sm:mb-8 shadow-inner">🔎</div>
            <p className="text-slate-400 dark:text-slate-500 font-black text-lg sm:text-2xl uppercase tracking-tighter mb-4">No stories found in {filter}.</p>
            <button 
              onClick={() => setFilter('All')} 
              className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] hover:underline underline-offset-8"
            >
              Back to all stories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
