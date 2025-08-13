import {
  ArrowRight,
    CircleAlertIcon,
  CircleCheck,
  CircleCheckBig,
  ClockAlert,
  ListCheck,
  Siren,
  TriangleAlert,
} from "lucide-react";
import React from "react";

const SolarProblemsSolution = ({ locationData }) => {
  const handleCalendly=()=>{
    window.open("https://calendly.com/swapnil-sasone/let-s-discuss-your-project","_blank")
  }
  const problems = [
    "30% energy loss due to lack of real-time monitoring",
    "Manual operations leading to inefficiencies",
    "Disconnected systems causing performance gaps",
    "No predictive maintenance capabilities",
    "Inability to optimize load scheduling",
  ];

  const metrics = [
    { value: "30%", label: "Energy Loss Reduction" },
    { value: "40%", label: "Lower Maintenance Costs" },
    { value: "90%+", label: "Prediction Accuracy" },
  ];

  // --- Personalization Logic ---
  // console.log('locationData ',locationData)
  const locationText = locationData?.city ? `in ${locationData.city}` : (locationData?.country ? `in ${locationData.country}` : "");
  const headline = `Stop Losing Money on Underperforming Solar Systems ${locationText}`;
  // --- End Personalization ---

  return (
    <section className="py-12 px-4 bg-white text-white font-sans">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M20 20h80v80H20z'/%3E%3Cpath d='M40 40h40v40H40z'/%3E%3Ccircle cx='60' cy='60' r='15'/%3E%3Cpath d='M60 20v15M60 85v15M20 60h15M85 60h15'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        />
      </div>
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M10 10h60v60H10z'/%3E%3Cpath d='M20 20h40v40H20z'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
  
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-slide-up">
            <span className="text-[#54B848]">
              {headline}
            </span>
          </h2>
          <div className="flex justify-center  mb-6">
            <div className="w-24 h-1 bg-[#002D8F] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Problems Section */}
          <div className="p-6 border-2 rounded-xl shadow-xl border-[#112547]">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center font-sans leading-relaxed relative">
              <span className="mr-2 text-red-800">
                <ClockAlert className="w-8 h-8" />
              </span>{" "}
              Common Solar Energy Problems
            </h3>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li
                  key={index}
                  className="relative border-l-4 border-red-600 bg-red-50 p-4 rounded-[5px] overflow-hidden text-black font-sans"
                >
                  {/* Grid background layer */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-md"
                    style={{
                      backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Exclamation icon watermark */}
                  <div className="absolute right-4 bottom-4 text-red-400 opacity-50 text-[90px] pointer-events-none z-0">
                   <TriangleAlert/>
                    {/* Or replace with a Lucide/FontAwesome icon if needed */}
                  </div>

                  {/* Content above the mask and watermark */}
                  <div className="relative  font-sans text-lg">
                    {problem}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
  className="p-6 rounded-xl shadow-lg border-2 border-[#002D8F] relative overflow-hidden bg-white"
>
  <div
    className="absolute inset-0 opacity-10 "
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L75 25 L100 50 L75 75 L50 100 L25 75 L0 50 L25 25 Z' fill='%23d1fae5'/%3E%3Cpath d='M50 10 L65 25 L80 40 L65 55 L50 70 L35 55 L20 40 L35 25 Z' fill='%23a7f3d0'/%3E%3C/svg%3E")`,
      backgroundSize: "200px 200px",
      backgroundRepeat: "repeat",
    }}
  />
  <h3 className="text-2xl font-bold text-black mb-6 flex items-center font-sans leading-relaxed relative">
    <span className="mr-3 font-sans">
      <CircleCheckBig className="w-8 h-8 text-light-green-800" />
    </span>{" "}
    PINAAK Solution
  </h3>
  <p className="text-black mb-8 leading-relaxed text-lg max-w-prose font-sans relative">
    Our AI-powered solar energy management system eliminates these problems
    with intelligent monitoring, predictive analytics, and automated
    optimization.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bottom-0 font-sans relative">
    {metrics.map((metric, index) => (
      <div
        key={index}
        className={`bg-[#002D8F] backdrop-blur-sm p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl  
        ${index === 1 ? "md:mt-12" : ""} 
        ${index === 0 ? "md:mt-24" : ""}
      `}
      >
        <p className="text-3xl font-extrabold text-white mb-2 font-sans">
          {metric.value}
        </p>
        <p className="text-sm text-gray-300 font-semibold uppercase tracking-wide font-sans">
          {metric.label}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => handleCalendly()}
          className="group relative px-10 py-5 border-2 border-[#002D8F] text-black hover:text-white rounded-2xl font-semibold text-lg hover:border-[#002D8F] hover:bg-[#002D8F] transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          <span className="relative flex items-center font-sans">
            Talk To Technical Expert
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default SolarProblemsSolution;
