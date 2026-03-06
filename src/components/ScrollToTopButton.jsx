import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scroll-to-top-enter { animation: slideUp 0.3s ease-out forwards; }
      `}</style>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-enter fixed bottom-8 right-8 bg-gradient-to-r from-[#EA580C] to-[#ff7a2f] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
