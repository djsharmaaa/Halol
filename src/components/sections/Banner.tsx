'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ServiceGrid from './../reusable/ServiceGrid';

const slides = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

export default function BannerWithServices() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full bg-[#f9f7f3] dark:bg-gray-900">
      {/* Banner */}
      <section className=" relative h-[75vh] overflow-hidden">
        {slides.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            priority
            quality={100}
            sizes="100vw"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center px-4">
            Welcome to Halol Municipal Corporation
          </h1>
        </div>
      </section>

 

    </div>
  );
}
