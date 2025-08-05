'use client';

import { useState } from 'react';
import TalkTechnicalHubspot from '../TalkTechnicalExpert';

export default function FloatingQuoteButton() {
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!visible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-0 left-0 z-50 w-60 bg-white shadow-lg border-2 rounded-se-3xl p-4">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute text-2xl top-2 left-2 text-red-800 hover:text-red-700"
        >
          &times;
        </button>

        {/* Message */}
        <p className="text-base text-gray-800 mb-4 font-sans mt-6">
          We’re just a message away! Let us help with your needs.
        </p>

        {/* Open Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full font-sans bg-blue-900 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Get a Quote
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        

           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-6 relative w-full max-w-2xl mx-4">
              <button
                className="absolute top-3 right-3 text-red-500 hover:text-black text-3xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <TalkTechnicalHubspot />
            </div>
          </div>
      )}
    </>
  );
}
