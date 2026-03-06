import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Sparkles, Droplet, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    title: 'Health and wellness',
    highlight: 'accessible to all',
    description: 'Celebrate your health with our premium pharmaceutical products and dedicated care.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80',
    title: 'Quality medicines',
    highlight: 'you can trust',
    description: 'Sourced directly from certified manufacturers with rigorous quality checks.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80',
    title: 'Expert care',
    highlight: 'always available',
    description: 'Licensed pharmacists ready to assist you with professional consultation.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80',
    title: 'Premium supplements',
    highlight: 'for better health',
    description: 'Natural health and wellness products to help you live your best life.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80',
    title: 'Trusted pharmacy',
    highlight: 'since years',
    description: 'Your reliable partner in healthcare with authentic medicines and expert guidance.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80',
    title: 'Fast delivery',
    highlight: 'at your doorstep',
    description: 'Quick and secure delivery of medicines right to your home.'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1550572017-4a6e8e8e1f3f?auto=format&fit=crop&q=80',
    title: 'Affordable prices',
    highlight: 'genuine products',
    description: 'Quality healthcare products at transparent and fair pricing.'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
    title: '24/7 support',
    highlight: 'always here for you',
    description: 'Round-the-clock customer support for all your healthcare needs.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative">
      
      {/* Main Hero Section with Slider */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-white/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 h-[400px] md:h-[500px] flex flex-col justify-center">
              <div className="max-w-xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4 text-gray-900">
                  {slide.title} <br />
                  <span className="text-primary">{slide.highlight}</span>
                </h1>
                <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6 font-normal leading-relaxed max-w-md">
                  {slide.description}
                </p>
                <div className="flex flex-row gap-2">
                  <button
                    onClick={() => {
                      const element = document.getElementById('discover-products');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 md:px-6 py-2 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm"
                  >
                    Explore Medicines
                  </button>
                  <Link
                    to="/about-us"
                    className="px-4 md:px-6 py-2 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 text-xs md:text-sm shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-6 md:w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Hero;
