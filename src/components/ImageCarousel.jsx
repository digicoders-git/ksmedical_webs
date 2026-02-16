import React, { useState, useEffect, useRef } from 'react';

const images = [
  "/carousel/c1.webp",
  "/carousel/c2.webp",
  "/carousel/c3.webp",
  "/carousel/c4.webp",
  "/carousel/c5.webp",
  "/carousel/c1.webp",
  "/carousel/c2.webp",
  "/carousel/c3.webp",
  "/carousel/c4.webp",
  "/carousel/c5.webp"
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
                    prevIndex === images.length - 3 ? 0 : prevIndex + 1
                ),
            3000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    return (
        <section className="py-20 bg-[#F9F9F7] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <div className="relative overflow-hidden w-full">
                    <div 
                        className="flex transition-transform duration-1000 ease-in-out whitespace-nowrap"
                        style={{ transform: `translate3d(${-currentIndex * (100 / 3)}%, 0, 0)` }}
                    >
                        {images.map((img, index) => (
                            <div 
                                key={index} 
                                className="inline-block w-full md:w-1/3 p-2 md:p-4 flex-shrink-0"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                                    <img 
                                        src={img} 
                                        alt={`Slide ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {Array.from({ length: images.length - 2 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === idx ? 'w-8 bg-[#EA580C]' : 'w-2 bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;
