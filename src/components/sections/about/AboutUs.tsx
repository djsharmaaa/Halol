'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';

type AboutData = {
  title: string;
  description: string[];
  videoUrl: string;
};

type FocusArea = {
  title: string;
  icon: ReactNode;
  description: string;
  image: string;
};

export default function AboutUs() {
  const [aboutData, setAboutData] = useState<AboutData>({
    title: '',
    description: [],
    videoUrl: '/images/nature2.mp4',
  });

  const [focusAreas] = useState<FocusArea[]>([
    {
      title: 'Innovation',
      icon: <FaLightbulb size={18} className="text-[#b34700]" />,
      description:
        'DIGITAL INDIA is at the forefront of driving technological innovation, encouraging research and development of digital solutions to address real-world challenges...',
      image: '/images/building.png',
    },
    {
      title: 'Digital Literacy',
      icon: <FaLightbulb size={18} className="text-[#b34700]" />,
      description:
        'Empowering citizens with digital knowledge and access to technology, bridging the digital divide across urban and rural India.',
      image: '/images/health.png',
    },
    {
      title: 'e-Governance',
      icon: <FaLightbulb size={18} className="text-[#b34700]" />,
      description:
        'Transforming public services through technology — making them more efficient, accessible, and transparent.',
      image: '/images/dog.png',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const dataFromBackend: AboutData = {
      title: 'Digital India: Power to Empower',
      description: [
        'Halol Municipality is the official municipal body governing Halol city, located in the Panchmahal district of Gujarat. As a progressive urban local authority, the Nagarpalika is dedicated to delivering efficient civic services, digital solutions, and environmentally sustainable development to over 1 lakh residents.',
        'From sanitation, water supply, and waste management to public health, infrastructure, and e-governance — Halol Municipality focuses on building a smart, inclusive, and responsive city that meets the needs of both citizens and industries.',
        'Strategically located just 5 km from the UNESCO World Heritage Site — Champaner-Pavagadh, Halol is a vibrant urban center deeply rooted in heritage, while embracing digital transformation and green practices.',
      ],
      videoUrl: '/videos/digital_india.mp4',
    };

    setAboutData(dataFromBackend);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % focusAreas.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [focusAreas.length]);

  const current = focusAreas[currentIndex];

  return (
    <>
      {/* About Us Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001845] dark:text-white mb-6 border-l-4 border-orange-500 pl-4">
              About Us
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {aboutData.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {aboutData.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <button className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full text-sm transition">
              Read More
            </button>
          </div>

          {/* Right: Video */}
          <div className="w-full">
            <video
              className="w-full h-auto rounded-lg shadow-xl"
              controls
              autoPlay
              muted
              poster="/images/visitors.jpg"
            >
              <source src={aboutData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-14 bg-white dark:bg-gray-900 transition-colors px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Our Key <span className="text-[#b34700]">Focus Areas</span>
          </h2>

          <div className="border border-[#b34700] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 shadow-lg transition-all duration-500">
            {/* Left: Icon + Text */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#fff7f0] dark:bg-gray-800">
                  {current.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#b34700]">
                  {current.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 mt-2">
                {current.description}
              </p>

              <div className="flex gap-2 mt-4">
                {focusAreas.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full border border-[#b34700] ${
                      idx === currentIndex ? 'bg-[#b34700]' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex-1 w-full max-w-[80px] sm:max-w-[120px] mx-auto">
              <Image
                src={current.image}
                alt={current.title}
                width={160}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
