  import React from 'react';
  import { motion } from 'framer-motion';

  const highlightItems = [
    {
      title: "Monitor every solar edge",
      description: "live status, one login, total control.",
      image: "/pinaak_lp/highl1.jpg",
    },
    {
      title: "Real-time energy insights at your fingertips",
      description: "live solar, battery, and grid data that never sleeps.",
      image: "/pinaak_lp/highl2.gif",
    },
    {
      title: "Dive deep into data history",
      description: "customizable time windows for smarter energy insights.",
      image: "/pinaak_lp/highl3.jpg",
    },
  ];

  // Animation variants
  const imageVariantsLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariantsRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariantsLeft = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariantsRight = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const Highlights = () => {
    return (
      <section
        id="results"
        className="py-12 px-4 bg-white text-white font-sans relative overflow-hidden"
      >
          <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M15 15h70v70H15z'/%3E%3Cpath d='M30 30h40v40H30z'/%3E%3Ccircle cx='50' cy='50' r='18'/%3E%3Cpath d='M50 15v12M50 73v12M15 50h12M73 50h12'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-slide-up">
              <span className="text-[#54B848]">
                Highlights
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-[#002D8F] rounded-full" />
            </div>
          </div>

          {/* Content Blocks */}
          <div className="space-y-24">
            {highlightItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Block */}
                  <motion.div
                    className="relative w-full md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    variants={isEven ? imageVariantsLeft : imageVariantsRight}
                  >
                    {/* Gradient background block */}
                    <div
                      className={`absolute ${
                        isEven ? '-top-6 -left-6' : '-top-6 -right-6'
                      } w-full h-full bg-blue-900 z-0`}
                    ></div>

                    {/* Image Container */}
                    <div className="relative bg-[#2D2D20] p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </motion.div>
                  <div className={`flex flex-1 items-center ${!isEven ? 'justify-end text-end' : ''}`}>
                  <motion.div
                    className="w-full md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    variants={isEven ? textVariantsRight : textVariantsLeft}
                  >
                    <h3 className="text-2xl max-w-xs font-sans md:text-3xl font-semibold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="font-sans max-w-xs text-lg text-black leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  export default Highlights;
