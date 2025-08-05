import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import SolarEMSaving from "./SolarEMSaving";
import LetsDiscussHubspot from "../LetsDiscussHubspot";
import TalkTechnicalHubspot from "../TalkTechnicalExpert";

const HeroSection = ({ locationData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // HubSpot form modal
  const [showExpertModal, setShowExpertModal] = useState(false); // Demo modal
  const [showSolarEMSaving, setShowSolarEMSaving] = useState(false); // SolarEMSaving modal
  const [formKey, setFormKey] = useState(0); // Key to force remount of LetsDiscussHubspot

  const openModal = () => {
    setIsModalOpen(true);
    setFormKey((prev) => prev + 1); // Increment key to force remount
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowExpertModal(false);
    setShowSolarEMSaving(false); // Close SolarEMSaving modal as well
  };

  const handleFormSubmit = () => {
    setIsModalOpen(false); // Close HubSpot form modal
    setShowSolarEMSaving(true); // Open SolarEMSaving modal
  };
  
  // Personalization Logic
  const subtitle = locationData?.company
    ? `The Smart AI-Driven Platform for ${locationData.company}`
    : locationData?.country
    ? `The Smart AI-Driven Platform in ${locationData.country}`
    : "The Smart AI-Driven Platform";
    
  const ctaText = locationData?.company
    ? `Calculate Savings for ${locationData.company}`
    : "Calculate My Solar Savings Now";


  useEffect(() => {
    const shouldLockScroll =
      isModalOpen || showExpertModal || showSolarEMSaving;
    if (shouldLockScroll) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Clean up on unmount
    };
  }, [isModalOpen, showExpertModal, showSolarEMSaving]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 opacity-[0.05]">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2314b8a6' stroke-width='1'%3E%3Cpath d='M10 10h60v60H10z'/%3E%3Cpath d='M20 20h40v40H20z'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>

          {/* Floating Orbs with Enhanced Animation */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${
                    6 + Math.random() * 4
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <div
                  className="w-6 h-6 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full blur-sm"
                  style={{
                    animation: `${
                      2 + Math.random() * 2
                    }s ease-in-out infinite alternate`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-blue-50/70 to-indigo-50/90 animate-gradient-shift" />

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={`shape-${i}`}
                className="absolute opacity-10 animate-spin-slow"
                style={{
                  left: `${10 + i * 8}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  animation: `spin ${20 + i * 2}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div className="w-8 h-8 border-2 border-teal-400/30 transform rotate-45" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <div className="space-y-8 animate-fade-in">
            {/* Main Headline with Enhanced Typography */}
            <div className="space-y-4">
              <div className="text-5xl mx-auto items-center flex justify-center md:text-7xl font-bold font-sans leading-tight tracking-tight">
                <img src="/pinaak_lp/pinaak_logo.svg" className="h-28" />
              </div>

              {/* Animated Underline */}
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-[#002D8F] rounded-full" />
              </div>
            </div>

            {/* Subtitle with Enhanced Styling */}
            <div
              className="space-y-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-2xl md:text-3xl font-sans text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Maximize Your Solar ROI, Minimize Wastage & Downtime with Our
                <span className="text-[#54B848] font-semibold">
                  {" "}
                  {subtitle}
                </span>
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
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
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
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
                onClick={() => setShowExpertModal(true)}
                className="group relative px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-50/0 to-teal-50/100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative flex items-center font-sans">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              {showExpertModal && (
                <div className="fixed inset-0 z-[100] bottom-0 flex items-center justify-center bg-black/50 backdrop-blur-sm mt-10">
                  <div className="bg-white rounded-2xl shadow-2xl z-50 bottom-0 p-6 relative w-full max-w-xl mx-4 my-10">
                    <button
                      className="absolute top-0 z-50 right-2 text-red-500 hover:text-black text-3xl font-bold"
                      onClick={() => setShowExpertModal(false)}
                    >
                      ×
                    </button>
                    <TalkTechnicalHubspot/>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" style={{ animationDelay: "0.8s" }}>
              <video
                src="/pinaak_lp/pinaak_video.mp4"
                height={800}
                width={800}
                className="mx-auto"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

        {/* Modal for HubSpot Form (Solar Savings Calculator) */}
        <Transition appear show={isModalOpen} as={React.Fragment}>
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
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden text-left align-middle transition-all">
                    <div className="mt-4 bg-white p-4 max-w-xl mx-auto">
                      <div className="relative z-50 mb-10">
                        {/* <h3 className="font-sans font-semibold text-xl text-[#54B848]">
                          Please Enter Below Details
                        </h3> */}
                        <button
                          onClick={closeModal}
                          className="absolute -top-2 right-1 text-red-600 hover:text-black text-3xl font-bold"
                        >
                          &times;
                        </button>
                      </div>
                      <TalkTechnicalHubspot
                        key={`solar-${formKey}`} // Force remount
                        formId={"9f413663-bc74-435c-a435-6b3bcc19f2ba"}
                        type={"solar"}
                        onFormSubmit={handleFormSubmit} // Callback for form submission
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

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
    </>
  );
};

export default HeroSection;
