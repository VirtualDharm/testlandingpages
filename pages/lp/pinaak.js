"use client";
import React, { useEffect, useRef, useState } from "react";
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
  // Hidden form state, now to capture browser autofill
  const [formData, setFormData] = useState({});
  const hiddenFormRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { locationData, loading } = useLocationData(); // Use the hook here
  // console.log('locationData1 : ',locationData)

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
  // Trigger browser autofill on section click
  const handleSectionClick = () => {
    const form = hiddenFormRef.current;
    if (!form) return;

    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
      input.focus();
      input.blur();
    });

    // Give browser a moment to fill in values
    setTimeout(() => {
      const autofillData = {};
      inputs.forEach((input) => {
        autofillData[input.name] = input.value;
      });
      setFormData(autofillData);
      console.log("Autofill Data:", autofillData);
    }, 100); // 100ms delay
  };

  // Add this useEffect in your component
  useEffect(() => {
    const loadScript = async () => {
      try {
        console.log("Loading script1.js...");
        console.log("Script1 loaded successfully.");
      } catch (error) {
        console.error("Error loading script:", error);
      }
    };

    loadScript();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <script
          id="warmly-script-loader"
          src="https://opps-widget.getwarmly.com/warmly.js?clientId=78b2253abcababb82b5154d6e930922b"
          defer
        ></script>
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

      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
        onClick={handleSectionClick}
      >
        <Script id="pinaak-test-script" strategy="afterInteractive">
          {`
            console.log('Hello from PinaakPage1!');
            console.log('Hello from PinaakPage2!');
            
            console.log('Hello from PinaakPage3!');
            console.log('Hello from PinaakPage4!');
          `}
        </Script>
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
      {/* HIDDEN FORM for browser autofill */}
      <form ref={hiddenFormRef} style={{ display: "none" }} autoComplete="on">
        {/* Name fields */}
        <input type="text" name="name" autoComplete="name" />
        <input type="text" name="given-name" autoComplete="given-name" />
        <input
          type="text"
          name="additional-name"
          autoComplete="additional-name"
        />
        <input type="text" name="family-name" autoComplete="family-name" />
        <input
          type="text"
          name="honoric-prefix"
          autoComplete="honoric-prefix"
        />
        <input
          type="text"
          name="honoric-suffix"
          autoComplete="honoric-suffix"
        />
        <input type="text" name="nickname" autoComplete="nickname" />

        {/* Contact fields */}
        <input type="email" name="email" autoComplete="email" />
        <input type="tel" name="tel" autoComplete="tel" />
        <input
          type="tel"
          name="tel-country-code"
          autoComplete="tel-country-code"
        />
        <input type="tel" name="tel-national" autoComplete="tel-national" />
        <input type="tel" name="tel-area-code" autoComplete="tel-area-code" />
        <input type="tel" name="tel-local" autoComplete="tel-local" />
        <input
          type="tel"
          name="tel-local-prefix"
          autoComplete="tel-local-prefix"
        />
        <input
          type="tel"
          name="tel-local-suffix"
          autoComplete="tel-local-suffix"
        />
        <input type="tel" name="tel-extension" autoComplete="tel-extension" />

        {/* Address fields */}
        <input
          type="text"
          name="street-address"
          autoComplete="street-address"
        />
        <input type="text" name="address-line1" autoComplete="address-line1" />
        <input type="text" name="address-line2" autoComplete="address-line2" />
        <input type="text" name="address-line3" autoComplete="address-line3" />
        <input
          type="text"
          name="address-level1"
          autoComplete="address-level1"
        />
        <input
          type="text"
          name="address-level2"
          autoComplete="address-level2"
        />
        <input
          type="text"
          name="address-level3"
          autoComplete="address-level3"
        />
        <input
          type="text"
          name="address-level4"
          autoComplete="address-level4"
        />
        <input type="text" name="country" autoComplete="country" />
        <input type="text" name="country-name" autoComplete="country-name" />
        <input type="text" name="postal-code" autoComplete="postal-code" />

        {/* Other fields */}
        <input type="text" name="organization" autoComplete="organization" />
        <input
          type="text"
          name="organization-title"
          autoComplete="organization-title"
        />
        <input type="text" name="username" autoComplete="username" />
        <input
          type="password"
          name="current-password"
          autoComplete="current-password"
        />
        <input
          type="password"
          name="new-password"
          autoComplete="new-password"
        />
        <input type="date" name="bday" autoComplete="bday" />
        <input type="number" name="bday-day" autoComplete="bday-day" />
        <input type="number" name="bday-month" autoComplete="bday-month" />
        <input type="number" name="bday-year" autoComplete="bday-year" />
        <input type="text" name="sex" autoComplete="sex" />
        <input type="text" name="one-time-code" autoComplete="one-time-code" />

        {/* Payment fields */}
        <input type="text" name="cc-name" autoComplete="cc-name" />
        <input type="text" name="cc-given-name" autoComplete="cc-given-name" />
        <input
          type="text"
          name="cc-additional-name"
          autoComplete="cc-additional-name"
        />
        <input
          type="text"
          name="cc-family-name"
          autoComplete="cc-family-name"
        />
        <input type="text" name="cc-number" autoComplete="cc-number" />
        <input type="text" name="cc-exp" autoComplete="cc-exp" />
        <input type="text" name="cc-exp-month" autoComplete="cc-exp-month" />
        <input type="text" name="cc-exp-year" autoComplete="cc-exp-year" />
        <input type="text" name="cc-csc" autoComplete="cc-csc" />
        <input type="text" name="cc-type" autoComplete="cc-type" />
        <input
          type="text"
          name="transaction-currency"
          autoComplete="transaction-currency"
        />
        <input
          type="number"
          name="transaction-amount"
          autoComplete="transaction-amount"
        />

        {/* Miscellaneous */}
        <input type="text" name="language" autoComplete="language" />
        <input type="url" name="url" autoComplete="url" />
        <input type="file" name="photo" autoComplete="photo" />
        <input type="text" name="impp" autoComplete="impp" />
      </form>
    </div>
  );
}
