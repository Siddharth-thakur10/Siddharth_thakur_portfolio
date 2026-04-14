import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[100] p-4 rounded-full transition-all duration-500 transform
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}
        bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#FFBF00]/50 hover:bg-[#FFBF00]/10 group
      `}
      aria-label="Back to top"
    >
      <ChevronUp className="text-white group-hover:text-[#FFBF00] transition-colors" size={24} />
      
      {/* Subtle outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#FFBF00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}