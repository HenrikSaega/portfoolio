import React, { useEffect, useRef } from 'react';

const InfiniteCarousel = ({ items, speed = 0.33 }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const allItems = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    const step = () => {
      positionRef.current -= speed;

      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
      }

      container.style.transform = `translateX(${positionRef.current}px)`;

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationRef.current);
  }, [items, speed]);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '70%',
        maxWidth: '100%',
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          gap: '4rem',
          willChange: 'transform',
        }}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              width: 'clamp(60px, 20vw, 150px)',
              height: 'clamp(60px, 15vw, 150px)',
              backgroundImage: `url(${item})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
