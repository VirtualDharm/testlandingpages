"use client";
import { useState } from "react";
import BRDHubspotForm from "@/Components/lp/pinaak/BRDHubspotForm";
import AboutSection from "@/Components/lp/pinaak/AboutSection";
import AISection from "@/Components/lp/pinaak/AISection";
import CTASection from "@/Components/lp/pinaak/CTASection";
import FeaturesSection from "@/Components/lp/pinaak/FeaturesSection";
import HeroSection from "@/Components/lp/pinaak/HeroSection";
import IndustriesSection from "@/Components/lp/pinaak/IndustriesSection";
import Navigation from "@/Components/lp/pinaak/Navigation";
import TestimonialsSection from "@/Components/lp/pinaak/TestimonialSection";
import PinaakFooter from "@/Components/lp/pinaak/PinaakFooter";
import Head from "next/head";
import Script from "next/script";
import Highlights from "@/Components/lp/pinaak/Highlights";
import SolarProblemsSolution from "@/Components/lp/pinaak/SolarPowerProblems";
import FloatingQuoteButton from "@/Components/lp/pinaak/FloatingQuoteButton";
import FloatingContactButtons from "@/Components/lp/FloatingContact";
import useLocationData from "@/Components/lp/pinaak/useLocationData"; // Import the custom hook

export default function PinaakPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { locationData, loading } = useLocationData(); // Use the hook here
  console.log('locationData1 : ',locationData)

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const organizationalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SAS One",
    url: "https://www.sasone.in",
    logo: "https://www.sasone.in/SASLOGO2.svg",
    description:
      "SAS One provides end-to-end engineering and technology solutions, specializing in embedded hardware, embedded software, Compute Edge AI, System On Module, and cloud enablement.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9305178146",
      contactType: "Customer Service",
      email: "swapnil@sasone.in",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    sameAs: [
      "https://in.linkedin.com/company/sasone",
      "https://twitter.com/sasone",
      "https://www.instagram.com/sasone.official",
    ],
    service: [
      {
        "@type": "Service",
        name: "Embedded Hardware Design & Development",
        description:
          "Custom PCB Design, SoC/MCU Selection, High-speed digital and RF layout, Thermal & EMI/EMC compliant systems",
      },
      {
        "@type": "Service",
        name: "Embedded Software & Firmware Engineering",
        description:
          "RTOS & Bare Metal Programming, Driver & Middleware Development, Bootloaders, OTA Updates, Secure Boot",
      },
      {
        "@type": "Service",
        name: "System on Modules (SoM) & Custom BSPs",
        description:
          "Modular, scalable platforms based on NXP, ST, TI, Qualcomm with custom BSP development",
      },
    ],
    industry: ["Medical Devices", "Automotive", "Aerospace", "Industrial IoT"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          SAS One - Pinaak AI-Powered Solar Energy Management System
        </title>
        <meta
          name="description"
          content="Transform your energy management with PINAAK's AI-driven solar energy management system. Maximize ROI, minimize wastage, and optimize energy consumption."
        />
        <meta
          name="keywords"
          content="solar energy management, PINAAK, SEMS, AI energy optimization, smart solar systems, energy management software, solar ROI, renewable energy, industrial energy solutions, SAS ONE"
        />
        <meta name="author" content="SAS One" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:title"
          content="SAS One - Pinaak AI-Powered Solar Energy Management System"
        />
        <meta
          property="og:description"
          content="Transform your energy management with PINAAK's AI-driven solar energy management system. Maximize ROI, minimize wastage, and optimize energy consumption."
        />
        <meta property="og:url" content="https://sasone.in" />
        <meta property="og:site_name" content="SAS One" />

        <meta
          property="og:image:alt"
          content="SAS One - Pinaak AI-Powered Solar Energy Management System"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SAS One - Pinaak AI-Powered Solar Energy Management System"
        />
        <meta
          name="twitter:description"
          content="Transform your energy management with PINAAK's AI-driven solar energy management system. Maximize ROI, minimize wastage, and optimize energy consumption with our smart SEMS platform by SAS ONE."
        />
        <meta name="twitter:image" content="https://sasone.in/og-image.jpg" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://sasone.in" />

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationalSchema),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* <BRDHubspotForm /> */}
        <Navigation onOpenModal={openModal} locationData={locationData} />
        <HeroSection onOpenModal={openModal} locationData={locationData} />
        <FeaturesSection locationData={locationData} />
        <SolarProblemsSolution locationData={locationData} />
        <Highlights locationData={locationData} />
        <AISection locationData={locationData} />
        {/* <IndustriesSection locationData={locationData}  /> */}
        <TestimonialsSection locationData={locationData} />
        <FloatingContactButtons />
        <AboutSection locationData={locationData} />
        {/* <FloatingQuoteButton locationData={locationData} /> */}
        <CTASection onOpenModal={openModal} locationData={locationData} />
        <PinaakFooter locationData={locationData} />
      </div>
    </div>
  );
}
