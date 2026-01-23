"use client";

import React from 'react';
import { useRouter } from 'next/navigation';



interface Step {
  title: string;
  description: string;
  icon: string;
}

const HowItWorksSection: React.FC = () => {
  const router = useRouter();
  const steps: Step[] = [
    {
      title: "Select a Persona",
      description: "Browse our curated collection of iconic thinkers, innovators, and leaders to begin your journey.",
      icon: "🧑‍🎤"
    },
    {
      title: "Start the Conversation",
      description: "Ask questions, explore ideas, or dive into deep discussions with AI personas that respond naturally and intelligently.",
      icon: "💬"
    },
    {
      title: "Discover Powerful Insights",
      description: "Unlock new perspectives, learn timeless wisdom, and gain clarity—all through advanced AI-driven conversations.",
      icon: "💡"
    }
  ];

  return (
    <section className="relative py-20 flex flex-col m-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How it{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI brings iconic personalities to life through natural, intelligent conversations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center border-2 border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent transform -translate-x-10 -translate-y-1/2" style={{ zIndex: -1 }} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => router.push('/persona')}
            className="group relative transform transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0">
            <div className="absolute inset-0 bg-black/20 rounded-full transform translate-y-1 group-hover:translate-y-0.5 transition-transform duration-150"></div>
            <div className="relative bg-gradient-to-b from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white px-8 py-4 rounded-full font-medium text-lg border border-cyan-300/50 shadow-sm">
              Start Your First Conversation
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Elements - Same as Hero Section */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
    </section>

  );
};

export default HowItWorksSection;