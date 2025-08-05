import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Calendar1, Menu, X } from "lucide-react";
import EmailHubspot from "../EmailHubspot";

const Navigation = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPPTFormDesktop, setShowPPTFormDesktop] = useState(false);
  const [showPPTFormMobile, setShowPPTFormMobile] = useState(false);

  const desktopFormRef = useRef();
  const mobileFormRef = useRef();
  const desktopButtonRef = useRef();
  const mobileButtonRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showPPTFormDesktop &&
        desktopFormRef.current &&
        !desktopFormRef.current.contains(event.target) &&
        !desktopButtonRef.current.contains(event.target)
      ) {
        setShowPPTFormDesktop(false);
      }

      if (
        showPPTFormMobile &&
        mobileFormRef.current &&
        !mobileFormRef.current.contains(event.target) &&
        !mobileButtonRef.current.contains(event.target)
      ) {
        setShowPPTFormMobile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPPTFormDesktop, showPPTFormMobile]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 group">
        {/* Nav background and effects (same as before) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gray-800/30 to-gray-900/30 backdrop-blur-xl border-b border-white/10 group-hover:border-white/20 transition-all duration-500">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M10 10h60v60H10z'/%3E%3Cpath d='M20 20h40v40H20z'/%3E%3Ccircle cx='40' cy='40' r='8'/%3E%3Cpath d='M40 10v15M40 55v15M10 40h15M55 40h15'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex z-40 justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group/logo">
              <a href="/" className="z-50">
                <img
                  className="h-8 w-auto transform group-hover/logo:scale-110 transition-transform duration-300"
                  src="/SASLOGO2.svg"
                  alt="SAS ONE Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <button
                  ref={desktopButtonRef}
                  onClick={() => {
                    setShowPPTFormDesktop((prev) => !prev);
                    setShowPPTFormMobile(false);
                  }}
                  className="relative px-4 py-2 text-white/70 hover:text-white transition-all duration-300 group/nav rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-700/30 to-navy-600/30 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-lg font-sans font-medium">
                    Download PPT
                  </span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-teal-400 group-hover/nav:w-full group-hover/nav:left-0 transition-all duration-300 ease-out" />
                  <div className="absolute -top-1 left-1/2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover/nav:opacity-100 transform -translate-x-1/2 transition-all duration-300" />
                </button>

                {showPPTFormDesktop && (
                  <div
                    ref={desktopFormRef}
                    className="absolute mt-2 rounded-xl w-full sm:w-60 border border-gray-300 bg-gray-200 shadow-xl p-4 z-50"
                  >
                    <EmailHubspot
                      onComplete={() => setShowPPTFormDesktop(false)}
                    />
                  </div>
                )}
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/swapnil-sasone/let-s-discuss-your-project",
                    "_blank"
                  )
                }
                className="relative z-50 ml-4 px-6 py-3 bg-[#54B848] text-white rounded-xl font-semibold overflow-hidden group/cta transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative font-sans z-10 flex items-center">
                  <Calendar1 className="mr-2 w-5 h-5" /> Book A Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 focus:outline-none"
              >
                <Menu className="w-6 h-6 text-white/80 hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setShowPPTFormMobile(false);
            }}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6 relative min-h-full">
              <button
                ref={mobileButtonRef}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowPPTFormMobile(false);
                }}
                className="absolute top-4 right-4 p-2"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="mt-16 space-y-6">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowPPTFormMobile((prev) => !prev);
                      setShowPPTFormDesktop(false);
                    }}
                    className="w-full px-4 py-3 text-white bg-gradient-to-r from-navy-700 to-navy-600 rounded-lg font-medium text-center"
                  >
                    {showPPTFormMobile ? "Close Form" : "Download PPT"}
                  </button>

                  {showPPTFormMobile && (
                    <div
                      ref={mobileFormRef}
                      className="mt-4 border border-gray-300 bg-gray-100 rounded-xl p-4 shadow-md"
                    >
                      <EmailHubspot
                        onComplete={() => {
                          setShowPPTFormMobile(false);
                        }}
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    window.open(
                      "https://calendly.com/swapnil-sasone/let-s-discuss-your-project",
                      "_blank"
                    );
                    setIsMobileMenuOpen(false);
                    setShowPPTFormMobile(false);
                  }}
                  className="w-full px-6 py-3 bg-[#54B848] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-transform duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Calendar1 className="mr-2 w-5 h-5" />
                    Book A Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
