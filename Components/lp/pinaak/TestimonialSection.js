import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = ({ locationData }) => {
  const allTestimonials = [
    {
      quote:
        "After integrating SAS SEMS with our 50KW rooftop solar setup, we saw a 22% reduction in energy costs and eliminated downtime from power surges completely.",
      author: "Rajesh Kumar",
      company: "Manufacturing Plant Manager",
      location: "India", // <-- Added location
      metrics: [
        { label: "Cost Reduction", value: "22%" },
        { label: "Downtime", value: "0%" },
        { label: "Solar Capacity", value: "50KW" },
      ],
    },
    {
      quote:
        "The AI-predictive insights helped us cut unnecessary grid draw during peak hours and extend our battery backup life significantly. A top choice for the USA.",
      author: "Dr. Priya Sharma",
      company: "University Facility Head",
      location: "United States", // <-- Added location
      metrics: [
        { label: "Peak Hour Savings", value: "35%" },
        { label: "Battery Life", value: "+40%" },
        { label: "Grid Dependency", value: "-28%" },
      ],
    },
  ];

  // Personalization Logic: Sort testimonials based on location
  const sortedTestimonials = React.useMemo(() => {
    if (!locationData?.country) {
      return allTestimonials;
    }
    return [...allTestimonials].sort((a, b) => {
      if (a.location === locationData.country) return -1; // 'a' comes first
      if (b.location === locationData.country) return 1;  // 'b' comes first
      return 0; // No change in order
    });
  }, [locationData]);

  return (
    <section
      id="results"
      className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='110' height='110' viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M20 20h70v70H20z'/%3E%3Cpath d='M35 35h40v40H35z'/%3E%3Ccircle cx='55' cy='55' r='15'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "110px 110px",
          }}
        />
      </div>

      {/* Floating Success Indicators */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 3) * 30}%`,
              animation: `float ${6 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <Star className="w-8 h-8 text-yellow-400 fill-current" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-slide-up">
            <span className="text-[#54B848]">
              Real-World Results
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-[#002D8F] rounded-full" />
          </div>
          <p
            className="text-xl font-sans text-slate-600 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            See how our clients have transformed their energy management with
            measurable results and significant cost savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Use the sortedTestimonials array for mapping */}
          {sortedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className="w-full h-full rounded-3xl"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M10 10h30v30H10z'/%3E%3Ccircle cx='25' cy='25' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Floating Quote Marks */}
              <div className="absolute top-4 left-4 text-6xl font-sans text-teal-400/20 leading-none">
                "
              </div>
              <div className="absolute bottom-4 right-4 text-6xl font-sans text-teal-400/20 leading-none rotate-180">
                "
              </div>

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-800 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-sans text-slate-700 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </blockquote>


                {/* Enhanced Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {testimonial.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="text-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-100/50 group-hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${metricIndex * 0.1}s` }}
                    >
                      <div className="text-3xl font-sans font-bold text-[#002D8F] mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm font-sans text-slate-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/5 to-teal-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
