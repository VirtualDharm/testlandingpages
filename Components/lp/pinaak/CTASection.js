import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import SolarEMSaving from "./SolarEMSaving";
import LetsDiscussHubspot from "../LetsDiscussHubspot";
import TalkTechnicalHubspot from "../TalkTechnicalExpert";

const CTASection = ({ onOpenModal, locationData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // HubSpot form modal
  const [showSolarEMSaving, setShowSolarEMSaving] = useState(false); // SolarEMSaving modal
  const [formKey, setFormKey] = useState(0); // Key to force remount of LetsDiscussHubspot
  const [showExpertModal, setShowExpertModal] = useState(false);
  
  // Personalization Logic
  const headline = locationData?.company
    ? `Ready to Transform Energy Management at ${locationData.company}?`
    : "Ready to Transform Your Energy Management?";

  const ctaText = locationData?.isBusiness
    ? "Get My Company's Savings Report"
    : "Calculate My Solar Savings Now";
    
  const openModal = () => {
    setIsModalOpen(true);
    setFormKey((prev) => prev + 1); // Increment key to force remount
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowSolarEMSaving(false); // Close SolarEMSaving modal as well
  };

  const handleFormSubmit = () => {
    setIsModalOpen(false); // Close HubSpot form modal
    setShowSolarEMSaving(true); // Open SolarEMSaving modal
  };

  const handleCalendly = () => {
    window.open(
      "https://calendly.com/swapnil-sasone/let-s-discuss-your-project",
      "_blank"
    );
  };

  useEffect(() => {
    const shouldLockScroll = isModalOpen || showSolarEMSaving;
    if (shouldLockScroll) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Clean up on unmount
    };
  }, [isModalOpen, showSolarEMSaving]);

  return (
    <section className="py-24 bg-[#002D8F] relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M20 20h80v80H20z'/%3E%3Cpath d='M40 40h40v40H40z'/%3E%3Ccircle cx='60' cy='60' r='15'/%3E%3Cpath d='M60 20v15M60 85v15M20 60h15M85 60h15'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="w-4 h-4 bg-white/30 rounded-full blur-sm animate-pulse" />
          </div>
        ))}
      </div>

   

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-8 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">
            {headline}
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-white/50 to-white/80 rounded-full" />
          </div>

          <p className="text-xl font-sans text-teal-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Get a personalized analysis of how much you can save with PINAAK.
            Our experts will provide a detailed efficiency report based on your
            current setup.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setShowExpertModal(true)}
              className="group relative px-8 py-4 bg-[#54B848] text-white rounded-xl font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#54B848] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 1}s`,
                    }}
                  />
                ))}
              </div>
              <span className="relative z-10 font-sans flex items-center">
                {ctaText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => handleCalendly()}
              className="group relative px-10 py-4 border-2 border-white/40 text-white rounded-2xl font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative flex items-center font-sans">
                Get Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for HubSpot Form (Solar Savings Calculator) */}
      {/* <Transition appear show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden text-left align-middle shadow-xl transition-all">
                  <div className="mt-4 bg-white p-4 max-w-md mx-auto">
                    <div className="relative z-50 mb-10">
                      <h3 className="font-sans font-semibold text-xl text-[#54B848]">
                        Please Enter Below Details
                      </h3>
                      <button
                        onClick={closeModal}
                        className="absolute -top-2 right-1 text-red-600 hover:text-black text-3xl font-bold"
                      >
                        &times;
                      </button>
                    </div>
                    <TalkTechnicalHubspot
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

      {showExpertModal && (
                        <div className="fixed inset-0 z-[100] bottom-0 flex items-center justify-center bg-black/50 backdrop-blur-sm mt-10">
                          <div className="bg-white rounded-2xl shadow-2xl z-50 bottom-0 p-6 relative w-full max-w-xl mx-4 my-10">
                            <button
                              className="absolute top-0 z-50 right-2 text-red-500 hover:text-black text-3xl font-bold"
                              onClick={() => setShowExpertModal(false)}
                            >
                              &times;
                            </button>
                            <TalkTechnicalHubspot/>
                          </div>
                        </div>
                      )}

      {/* Modal for SolarEMSaving */}
      <Transition appear show={showSolarEMSaving} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden text-left align-middle transition-all">
                  <div className="bg-white rounded-2xl shadow-lg relative">
                    <button
                      onClick={closeModal}
                      className="absolute top-1 right-2 text-red-600 hover:text-black text-3xl font-bold"
                    >
                      &times;
                    </button>
                    <SolarEMSaving />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default CTASection;
