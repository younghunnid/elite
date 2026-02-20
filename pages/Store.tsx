
import React from 'react';
import { PRODUCTS } from '../constants';

const Store: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 sm:py-20 overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">The Elite Store</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-medium">High-quality computers, genuine accessories, and professional software solutions.</p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">{p.category}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 mb-4 flex-grow leading-tight">{p.name}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">{p.price}</span>
                  <button 
                    className="p-3 bg-blue-900 hover:bg-blue-700 text-white rounded-xl transition-colors active:scale-95 shadow-md"
                    aria-label="Add to cart"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
