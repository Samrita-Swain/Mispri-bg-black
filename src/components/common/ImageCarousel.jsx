import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageCarousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

        // Reset transition state after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayInterval, images.length]);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 my-4 md:my-6 lg:my-8">
      <div className="relative">
        {/* Main carousel container */}
        <div className="relative h-[250px] md:h-[320px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg">

          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {image.caption && (
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-xl bg-gradient-to-r from-pink-50/90 to-pink-50/80 p-6 md:p-8 rounded-lg ml-0 md:ml-4 lg:ml-8">
                      <h2 className="text-3xl md:text-5xl font-bold text-[#0F3B4D] mb-2">{image.caption.title}</h2>
                      {image.caption.subtitle && (
                        <p className="text-lg md:text-xl !text-gray-700">{image.caption.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-0 hover:bg-opacity-50 rounded-full p-2 z-20 transition-all duration-300 opacity-0 hover:opacity-100"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-800 w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-0 hover:bg-opacity-50 rounded-full p-2 z-20 transition-all duration-300 opacity-0 hover:opacity-100"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-800 w-5 h-5" />
          </button>
        </div>

        {/* Indicator dots - now below the image */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#ffc374] scale-110' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
