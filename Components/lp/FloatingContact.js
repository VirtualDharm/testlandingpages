import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-2 z-50 flex flex-col items-center gap-4">
      {/* Gmail Button */}
      <div className="relative group">
        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping-slow" />
        <span className="absolute inset-0 rounded-full bg-white/10 animate-ping-slower" />
        <a
          href="mailto:swapnil@sasone.in"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <SiGmail className="text-3xl text-[#EA4335]" />
          <img src='/floating_icons/social_email.jpg' className='rounded-full'/>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group">
        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400/20 animate-ping-slow" />
        <span className="absolute inset-0 rounded-full bg-green-400/10 animate-ping-slower" />
        <a
          href="https://wa.me/+919565155000"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <img src='/floating_icons/social_whatsapp.jpg' className='rounded-full p-1'/>
        </a>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingContactButtons;
