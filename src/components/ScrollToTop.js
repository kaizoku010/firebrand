import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const threshold = document.documentElement.scrollHeight * 0.1;
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
            width: '55px',
            height: '55px',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            animation: 'fadeIn 0.3s ease-in',
            transition: 'transform 0.3s ease, background 0.3s ease',
            fontSize: '20px',
            fontWeight: 'bold',
            transform: isVisible ? 'scale(1)' : 'scale(0)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.background = 'rgb(251, 146, 19)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = 'rgb(251 176 59)';
          }}
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
        `}
      </style>
    </>
  );
};

export default ScrollToTop;

