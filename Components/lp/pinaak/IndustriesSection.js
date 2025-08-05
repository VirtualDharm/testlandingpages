import React from "react";
import {
  Factory,
  Building2,
  GraduationCap,
  FlaskConical,
  Warehouse,
  Hospital,
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Factory,
      title: "Industrial Units & Factories",
      description:
        "Optimize energy consumption in manufacturing processes and reduce operational costs significantly.",
      image:
        "https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Building2,
      title: "Commercial Buildings & Malls",
      description:
        "Smart energy management for retail spaces, offices, and commercial complexes.",
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: GraduationCap,
      title: "Educational Campuses",
      description:
        "Comprehensive energy solutions for schools, colleges, and university campuses.",
      image:
        "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: FlaskConical,
      title: "Laboratories & R&D Facilities",
      description:
        "Precise energy control for sensitive research and development environments.",
      image:
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Warehouse,
      title: "Warehouses & Cold Storages",
      description:
        "Energy-efficient solutions for storage facilities and temperature-controlled environments.",
      image:
        "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Hospital,
      title: "Hospitals & Healthcare Facilities",
      description:
        "Guarantee uninterrupted power for critical systems and optimize backup battery cycles.",
      image:
        "https://images.pexels.com/photos/6129144/pexels-photo-6129144.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M15 15h60v60H15z'/%3E%3Cpath d='M30 30h30v30H30z'/%3E%3Ccircle cx='45' cy='45' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* Floating Industrial Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="w-12 h-12 border-2 border-teal-400/30 rounded-xl transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
          </div>
          <p
            className="text-xl font-sans text-gray-600 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Our solution is ideal for organizations seeking intelligent energy
            management and optimization across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl h-96 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl animate-slide-up ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Background Image */}
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/80 group-hover:from-gray-900/60 group-hover:via-gray-800/50 group-hover:to-gray-900/70 transition-all duration-500" />

                {/* Animated Overlay Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M10 10h40v40H10z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "60px 60px",
                    }}
                  />
                </div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <industry.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-teal-200 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="font-sans text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-400/60 rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 10}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/30 rounded-3xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
