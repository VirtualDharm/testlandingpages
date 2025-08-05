import React, { useLayoutEffect } from "react";

const EmailHubspot = ({ onComplete }) => {
  useLayoutEffect(() => {
    const loadForm = () => {
      const container = document.getElementById("hubspot-form");
      if (window.hbspt && container) {
        container.innerHTML = "";
        window.hbspt.forms.create({
          portalId: "243201853",
          formId: "58d24122-aff1-4e78-8944-e0e8e9e7e3fa",
          region: "na2",
          target: "#hubspot-form",
          onFormSubmitted: function () {
            setTimeout(() => {
              const link = document.createElement("a");
              link.href = "/pinaak_lp/PINAAKpdf.pdf";
              link.setAttribute("download", "Presentation.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              if (onComplete) onComplete();
            }, 3000);
          },
        });
      }
    };

    const waitForDOM = () => {
      const interval = setInterval(() => {
        if (document.getElementById("hubspot-form")) {
          clearInterval(interval);
          loadForm();
        }
      }, 100);
    };

    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        waitForDOM();
      };
      document.body.appendChild(script);
    } else {
      waitForDOM();
    }

    return () => {
      const container = document.getElementById("hubspot-form");
      if (container) container.innerHTML = "";
    };
  }, [onComplete]);

  return <div id="hubspot-form" className="" />;
};

export default EmailHubspot;
