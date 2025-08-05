import React, { useState } from "react";
import { Brain, Sun, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import TalkTechnicalHubspot from "../TalkTechnicalExpert";

const AISection = () => {
  const [showExpertModal, setShowExpertModal] = useState(false);
  const features = [
    {
      icon: Brain,
      title: "Predictive Energy Demand",
      description:
        "Analyzes occupancy, weather, and usage patterns to predict energy demand with remarkable accuracy.",
    },
    {
      icon: Sun,
      title: "Real-time Solar Forecasting",
      description:
        "Forecasts solar generation in real time based on weather conditions and historical data.",
    },
    {
      icon: Shield,
      title: "Early Fault Detection",
      description:
        "Detects faults early to prevent downtime and protect your valuable equipment.",
    },
    {
      icon: TrendingUp,
      title: "Smart Load Management",
      description:
        "Intelligently switches power sources and reduces waste through automated load balancing.",
    },
  ];

  return (
    <section
      id="features"
      className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M15 15h70v70H15z'/%3E%3Cpath d='M30 30h40v40H30z'/%3E%3Ccircle cx='50' cy='50' r='18'/%3E%3Cpath d='M50 15v12M50 73v12M15 50h12M73 50h12'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Floating AI Neural Network Visualization */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 20}%`,
                animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 rounded-full relative">
                <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 animate-ping" />
                <div className="w-3 h-3 bg-teal-500/60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Animated Connection Lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-teal-400/30 to-transparent animate-pulse"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 30}%`,
                width: "2px",
                height: `${20 + i * 5}%`,
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-slide-up">
            <span className="text-[#54B848]">
              AI-Powered Energy Intelligence
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-[#002D8F] rounded-full " />
          </div>
          <p
            className="text-xl font-sans text-slate-600 max-w-4xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            SAS SEMS uses AI and machine learning to optimize energy use with
            precision, learning and adapting to become more efficient over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 border border-[#002D8F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <feature.icon className="w-7 h-7 text-[#002D8F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-sans font-bold text-slate-800 mb-3 group-hover:text-[#54B848] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Enhanced AI Visualization */}
          <div
            className="relative animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-white/80 to-slate-100/80 rounded-3xl border border-slate-200/50 overflow-hidden shadow-2xl backdrop-blur-sm">
              <Image
                src="/pinaak_lp/AI-Solar.jpg"
                alt="AI Visualization"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => setShowExpertModal(true)}
          className="group relative px-10 py-5 border-2 border-[#002D8F] text-black hover:text-white rounded-2xl font-semibold text-lg hover:border-[#002D8F] hover:bg-[#002D8F] transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          <span className="relative flex items-center font-sans">
            Talk To Technical Expert
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
        {showExpertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-6 relative w-full max-w-2xl mx-4">
              <button
                className="absolute top-3 right-3 text-red-500 hover:text-black text-3xl font-bold"
                onClick={() => setShowExpertModal(false)}
              >
                &times;
              </button>
              <TalkTechnicalHubspot />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AISection;
