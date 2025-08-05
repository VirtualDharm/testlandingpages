import React from "react";
import {
  Settings,
  BarChart3,
  Cpu,
  Brain,
  Cloud,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Advanced Sensors",
      description:
        "Precision voltage, current, and usage monitoring sensors for comprehensive real-time data collection.",
      color: "from-blue-500 to-blue-600",
      delay: "0s",
    },
    {
      icon: BarChart3,
      title: "Data Acquisition System",
      description:
        "Real-time data collection and processing with advanced analytics for immediate insights.",
      color: "from-teal-500 to-teal-600",
      delay: "0.1s",
    },
    {
      icon: Cpu,
      title: "Edge AI Controller",
      description:
        "Powered by PINAAK - intelligent edge computing for instant decision making and optimization.",
      color: "from-cyan-500 to-cyan-600",
      delay: "0.2s",
    },
    {
      icon: Brain,
      title: "SEMS Software Dashboard",
      description:
        "Intuitive interface for monitoring, control, and optimization of your energy systems.",
      color: "from-indigo-500 to-indigo-600",
      delay: "0.3s",
    },
    {
      icon: Cloud,
      title: "Cloud Connectivity",
      description:
        "Scalable APIs and cloud integration for remote monitoring and management capabilities.",
      color: "from-purple-500 to-purple-600",
      delay: "0.4s",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description:
        "Intelligent switching between solar, grid, and battery power sources automatically.",
      color: "from-orange-500 to-orange-600",
      delay: "0.5s",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M10 10h60v60H10z'/%3E%3Cpath d='M20 20h40v40H20z'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 50}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="w-16 h-16 border-2 border-teal-400/30 rounded-lg transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-slide-up">
            <span className="text-[#54B848]">What is SAS SEMS?</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-[#002D8F] rounded-full" />
          </div>
          <p
            className="text-xl font-sans text-slate-600 max-w-4xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            SAS SEMS is a fully integrated hardware + software solution built to
            monitor, control, and optimize solar energy consumption using
            intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-slate-50/80 to-white rounded-3xl border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className="w-full h-full rounded-3xl"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M5 5h30v30H5z'/%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-teal-400/60 rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div
                  className={`w-20 h-20 border border-[#002D8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                >
                  <feature.icon className="w-10 h-10 text-[#002D8F]" />
                </div>

                <div className="flex items-center mb-4">
                  {/* <CheckCircle className="w-5 h-5 text-teal-500 mr-3 animate-pulse" /> */}
                  <h3 className="text-xl font-sans font-bold text-slate-800">
                    {feature.title}
                  </h3>
                </div>

                <p className="font-sans text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/5 to-teal-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeaturesSection;
