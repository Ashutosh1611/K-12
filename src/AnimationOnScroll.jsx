import React, { useEffect, useRef, useState } from 'react';
import './AnimationOnScroll.css'; // Import animation styles

const AnimationOnScroll = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Optional: Stop observing after it appears
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`box ${isVisible ? 'animate' : ''}`}
    >
      <h2>Scroll to reveal me!</h2>
    </div>
  );
};

export default AnimationOnScroll;
