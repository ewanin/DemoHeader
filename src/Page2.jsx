import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const images = [
  'https://as1.ftcdn.net/v2/jpg/05/32/15/56/1000_F_532155617_kPG6xXSWs2jzzQ68edNwU8qGbipvEJHp.jpg',
  'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  'https://img.freepik.com/premium-photo/painting-lake-with-mountains-sun-shining-it_865053-55.jpg',
];

const Page2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {images.map((imageUrl, index) => (
            <Transition
              show={index === activeIndex}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              key={index}
            >
              <img
                src={imageUrl}
                alt={`Slide ${index}`}
                className="object-cover w-full h-64 sm:h-96 md:h-128"
              />
            </Transition>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 px-4 py-2 bg-gray-800 text-white rounded-l-md"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-2 bg-gray-800 text-white rounded-r-md"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Page2;
