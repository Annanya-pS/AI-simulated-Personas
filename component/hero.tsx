"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          Talk With the {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Minds Who
          </span>
          , Shaped History
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
          Your Persona uses cutting-edge AI to bring famous figures to life   ,
          Step into lifelike conversations powered by next-generation AI.
        </p>
        <button
          onClick={() => router.push('/persona')}
          className="group relative mb-12 transform transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className="absolute inset-0 bg-black/20 rounded-full transform translate-y-1 group-hover:translate-y-0.5 transition-transform duration-150"></div>
          <div className="relative bg-gradient-to-b from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white px-8 py-4 rounded-full font-medium text-lg border border-cyan-300/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7)]">
            Start Chatting
          </div>
        </button>
      </main>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
    </div>
  );
};

export default HeroSection;
