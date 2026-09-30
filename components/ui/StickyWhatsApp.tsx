import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const StickyWhatsApp: React.FC = () => {
  const whatsappNumber = '+919792166702';
  const whatsappMessage = encodeURIComponent("Hi Sownmark, I'd like to book a free digital strategy call.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:animate-none" />
      
      {/* Icon */}
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </a>
  );
};

export default StickyWhatsApp;
