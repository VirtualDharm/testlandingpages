import React, { useEffect, useState } from "react";

const LetsDiscussHubspot = ({ formId, type, onFormSubmit }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "hubspot-embed-v2";

    // Load HubSpot script if not already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "243234182",
            formId: formId || "073a1158-2439-4072-898a-967037f62915",
            region: "na2",
            target: "#hubspot-form",
            inlineMessage: "", 
            onFormSubmitted: function () {
              if (type === "solar" && onFormSubmit) {
                onFormSubmit(); 
              }
            },
          });

          setTimeout(() => setIsLoaded(true), 500);
        }
      };

      document.body.appendChild(script);
    } else if (window.hbspt) {
      // If script is already loaded, create the form immediately
      window.hbspt.forms.create({
        portalId: "243234182",
        formId: formId || "073a1158-2439-4072-898a-967037f62915",
        region: "na2",
        target: "#hubspot-form",
        inlineMessage: "",
        onFormSubmitted: function () {
          if (type === "solar" && onFormSubmit) {
            onFormSubmit(); 
          }
        },
      });

      setTimeout(() => setIsLoaded(true), 500);
    }

    // Cleanup: Clear the form container
    return () => {
      const form = document.querySelector("#hubspot-form");
      if (form) form.innerHTML = "";
      setIsLoaded(false); // Reset isLoaded on unmount
    };
  }, [formId, type, onFormSubmit]); // Re-run effect when formId, type, or onFormSubmit changes

  return (
    <div className="relative min-h-[150px]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <svg
            className="animate-spin h-8 w-8 text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
            />
          </svg>
        </div>
      )}
      <div id="hubspot-form" className="z-50" />
    </div>
  );
};

export default LetsDiscussHubspot;