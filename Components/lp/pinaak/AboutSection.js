import React, { useState } from "react";
import {
  CheckCircle,
  Cloud,
  BarChart3,
  Brain,
  Cpu,
  ArrowRight,
} from "lucide-react";
import TalkTechnicalHubspot from "../TalkTechnicalExpert";
const AboutSection = ({ locationData }) => {
  const [showExpertModal, setShowExpertModal] = useState(false);
  const points = [
    {
      title: "2+ Years in Embedded, Cloud, and AI Systems",
      description:
        "Deep expertise in cutting-edge technologies that power modern energy management solutions.",
    },
    {
      title: "Custom Solutions for Leading OEMs & Industries",
      description:
        "Tailored solutions designed specifically for your industry requirements and operational needs.",
    },
    {
      title: "Proven Results in Solar + EMS Deployments",
      description:
        "Track record of successful implementations with measurable ROI and performance improvements.",
    },
    {
      title: "Strong Tech Stack – From Hardware to Cloud",
      description:
        "End-to-end capabilities covering every aspect of modern energy management systems.",
    },
    {
      title: "Post-Deployment Support & Real-Time Analytics",
      description:
        "Ongoing support and continuous optimization through advanced analytics and monitoring.",
    },
  ];

  const techStack = [
    {
      label: "Cloud Analytics",
      color: "from-purple-500 to-purple-600",
      icon: Cloud,
    },
    {
      label: "Web Dashboard",
      color: "from-blue-500 to-blue-600",
      icon: BarChart3,
    },
    {
      label: "Edge AI",
      color: "from-teal-500 to-teal-600",
      icon: Brain,
    },
    {
      label: "Hardware",
      color: "from-orange-500 to-orange-600",
      icon: Cpu,
    },
  ];

  // --- Personalization Logic ---
  const ctaText = locationData?.isBusiness 
    ? "Discuss a Solution for Your Team" 
    : "Let's Get Started";
  // --- End Personalization ---

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M15 15h70v70H15z'/%3E%3Cpath d='M30 30h40v40H30z'/%3E%3Ccircle cx='50' cy='50' r='18'/%3E%3Cpath d='M50 15v12M50 73v12M15 50h12M73 50h12'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              animation: `float ${8 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div className="w-10 h-10 border-2 border-teal-400/30 rounded-lg transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-6xl font-sans font-bold mb-8">
          <span className="text-[#54B848]">Why Choose SAS ONE?</span>
        </h2>
        <div className="w-24 h-1 bg-[#002D8F] rounded-full mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-up">
            <div className="space-y-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 border border-[#002D8F] rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <CheckCircle className="w-5 h-5 text-[#002D8F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-sans font-semibold text-slate-800 mb-2 group-hover:text-[#54B848] transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="font-sans text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Enhanced Tech Stack Visualization */}
            <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-50/90 to-slate-100/90 rounded-3xl border border-slate-200/50 overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M10 10h40v40H10z'/%3E%3Cpath d='M20 20h20v20H20z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>

              {/* Floating Connection Lines */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-pulse"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${15 + (i % 3) * 25}%`,
                      width: "2px",
                      height: `${20 + i * 5}%`,
                      transform: `rotate(${i * 30}deg)`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Enhanced Tech Stack Layers */}
              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 p-8">
                {techStack.map((layer, index) => (
                  <div
                    key={index}
                    className={`w-full max-w-sm h-14 bg-gradient-to-r ${layer.color} rounded-2xl flex items-center justify-center text-white font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 group`}
                    style={{
                      animation: `float ${
                        4 + index * 0.5
                      }s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <layer.icon className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-sans">{layer.label}</span>

                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* Corner Tech Indicators */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-teal-400/30 rounded-full animate-pulse" />
              <div
                className="absolute top-4 right-4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute bottom-4 left-4 w-4 h-4 bg-orange-400/30 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-4 right-4 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
            <div className="flex items-center justify-center mt-8 ">
              <button
                onClick={() => setShowExpertModal(true)}
                className="group relative px-10 py-5 border-2 border-[#54B848] text-black hover:text-white rounded-2xl font-semibold text-lg hover:border-[#54B848] hover:bg-[#54B848] transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                <span className="relative flex items-center font-sans">
                  {ctaText}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
