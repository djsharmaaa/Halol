'use client';

import Image from 'next/image';
import React from 'react';

const column1 = [
  {
    title: 'Smart Governance',
    stat: '23M Aadhaar Cards Issued',
    image: '/images/municipal.jpg',
    bg: 'bg-[#fdebd0]',
  },
];

const column2 = [
  {
    title: 'Digital Services',
    stat: '12K+ Online Applications',
    image: '/images/departments.jpg',
    bg: 'bg-[#e8f8f5]',
  },
  {
    title: 'Infrastructure',
    stat: '300+ Smart Poles Installed',
    image: '/images/slide1.jpg',
    bg: 'bg-[#f9ebea]',
  },
  {
    title: 'Sustainability',
    stat: '10K+ Trees Planted',
    image: '/images/municipal.jpg',
    bg: 'bg-[#fef9e7]',
  },
];

const column3 = [
  {
    title: 'Health & Hygiene',
    stat: '15% Public Health Boost',
    image: '/images/slide2.jpg',
    bg: 'bg-[#ebf5fb]',
  },
  {
    title: 'Community Reach',
    stat: '2.5L+ Citizens Reached',
    image: '/images/slide1.jpg',
    bg: 'bg-[#f4ecf7]',
  },
];

export default function OurImpact() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
          Our <span className="text-[#b34700]">Impact</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 - 1 big card */}
          <div className="flex flex-col gap-6">
            {column1.map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl shadow-lg group h-[484px] ${item.bg}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl">
                    <p className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                      {item.stat}
                    </p>
                    <h3 className="text-white text-2xl font-bold mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 - 3 small cards */}
          <div className="flex flex-col gap-4">
            {column2.map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl shadow-lg group h-[150px] ${item.bg}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="backdrop-blur-sm bg-white/10 p-3 rounded-lg">
                    <p className="text-xs text-orange-300 font-medium uppercase tracking-wider">
                      {item.stat}
                    </p>
                    <h4 className="text-white text-md font-semibold">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 - 2 medium cards */}
          <div className="flex flex-col gap-6">
            {column3.map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl shadow-lg group h-[230px] ${item.bg}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl">
                    <p className="text-sm text-orange-200 font-medium tracking-wide">
                      {item.stat}
                    </p>
                    <h4 className="text-white text-lg font-semibold">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
