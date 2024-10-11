"use client"; // Marking this as a Client Component

import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/2150287601.jpg',
    '/images/2150287603.jpg',
    '/images/2150645573.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className="overlay"></div>
      <div className="slider-text">
        <h1>Welcome to Our Website</h1>
        <p>Your journey begins here. Explore our services.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="controls">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <button className="nav-button prev" onClick={handlePrevSlide}>❮</button>
      <button className="nav-button next" onClick={handleNextSlide}>❯</button>
    </div>
  );
};

export default HeroSlider;
