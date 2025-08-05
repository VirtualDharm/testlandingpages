import React, { useEffect, useState } from "react";

const TalkTechnicalHubspot = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "hubspot-embed-script";
    const formContainerId = "hubspot-frame";

    // Prevent re-initializing if already embedded
    if (window.__hubspotFormLoaded) {
      setIsLoaded(true);
      return;
    }

    const script = document.getElementById(scriptId);

    if (!script) {
      const newScript = document.createElement("script");
      newScript.id = scriptId;
      newScript.src = "https://js-na2.hsforms.net/forms/embed/243201853.js";
      newScript.defer = true;
      newScript.onload = () => {
        setTimeout(() => {
          setIsLoaded(true);
          window.__hubspotFormLoaded = true;
        }, 500);
      };
      document.body.appendChild(newScript);
    } else {
      // If script is already there, still delay before marking as loaded
      setTimeout(() => {
        setIsLoaded(true);
        window.__hubspotFormLoaded = true;
      }, 500);
    }

    return () => {
      // You can keep this cleanup if needed
    };
  }, []);

  return (
    <div className="relative min-h-[200px]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          {/* Spinner */}
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

      {/* HubSpot form container */}
      <div
        id="hubspot-frame"
        className="hs-form-frame"
        data-region="na2"
        data-form-id="ddd8ef55-78f1-4b31-baf9-ff45b3f8a08d"
        data-portal-id="243201853"
      ></div>
    </div>
  );
};

export default TalkTechnicalHubspot;
