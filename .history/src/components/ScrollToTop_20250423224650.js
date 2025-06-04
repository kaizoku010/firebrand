import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleVisibility = () => {
    // Change threshold to be more mobile-friendly
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const threshold = window.innerHeight * 0.3; // 30% of viewport height
    setIsVisible(scrolled > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (isHomePage) return null;

  return (
    <>
      {isVisible && 
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgb(251 176 59)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '45px', // Slightly smaller on mobile
            height: '45px', // Slightly smaller on mobile
            cursor: 'pointer',
            zIndex: 9999, // Increased z-index
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.3s ease-in',
            transition: 'transform 0.3s ease, background 0.3s ease',
            fontSize: '20px',
            fontWeight: 'bold',
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            '@media (max-width: 768px)': { // Mobile styles
              width: '40px',
              height: '40px',
              bottom: '15px',
              right: '15px',
              fontSize: '18px',
            }
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.background = 'rgb(251, 146, 19)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = 'rgb(251 176 59)';
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      }
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @media (max-width: 768px) {
            .scroll-to-top-button {
              width: 40px !important;
              height: 40px !important;
              bottom: 15px !important;
              right: 15px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default ScrollToTop;


