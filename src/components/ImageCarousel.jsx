import React, { useState, useEffect, useRef } from 'react';

const images = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80"
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 5 ? 0 : prevIndex + 1
                ),
            4000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-full">
                {/* Header */}
                <div className="text-left mb-12 pl-4 md:pl-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 border-b-4 border-primary inline-block pb-2">
                        Our Gallery
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-normal max-w-2xl mt-4">
                        Explore our collection of healthcare products and services
                    </p>
                </div>

                <div className="relative overflow-hidden w-full px-6">
                    <div 
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translate3d(${-currentIndex * (100 / 5)}%, 0, 0)` }}
                    >
                        {images.map((img, index) => (
                            <div 
                                key={index} 
                                className="inline-block w-1/2 md:w-1/5 p-2 flex-shrink-0"
                            >
                                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                                    <img 
                                        src={img} 
                                        alt={`Medical Gallery ${index + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: images.length - 4 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 hover:bg-primary/70 ${
                                    currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;
