'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const years = ['All', '2025', '2024', '2023', '2022'];

const mediaData = [
  {
    title: 'NeGD organises Awareness Workshop on EntityLocker',
    src: '/images/slide1.jpg',
    year: '2025',
  },
  {
    title: 'VIVA Tech 2025',
    src: '/images/slide2.jpg',
    year: '2025',
  },
  {
    title: 'India’s Common Compute Capacity Event',
    src: '/images/slide3.jpg',
    year: '2024',
  },
   {
    title: 'India’s Common Compute Capacity Event',
    src: '/images/slide3.jpg',
    year: '2024',
  },
   {
    title: 'NeGD organises Awareness Workshop on EntityLocker',
    src: '/images/slide1.jpg',
    year: '2025',
  },
  {
    title: 'VIVA Tech 2025',
    src: '/images/slide2.jpg',
    year: '2025',
  },
];

export default function MediaGallery() {
  const [activeYear, setActiveYear] = useState('All');

  const filteredMedia =
    activeYear === 'All'
      ? mediaData
      : mediaData.filter((item) => item.year === activeYear);

  return (
    <section className="bg-white dark:bg-[#111827] py-12 px-4 sm:px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-semibold text-[#0d1b4c] dark:text-white border-b-2 inline-block pb-1 border-orange-600">
            Our <span className="text-[#b34725]">Media</span>
          </h2>
        </div>

        {/* Year Filter + Button */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex gap-3 flex-wrap">
            {years.map((year) => (
              <button
                key={year}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                  activeYear === year
                    ? 'bg-[#b34725] text-white'
                    : 'bg-orange-100 text-[#b34725] hover:bg-orange-200'
                )}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <button className="border border-[#b34725] text-[#b34725] hover:bg-[#b34725] hover:text-white rounded-full px-6 py-2 transition">
            View Gallery
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {filteredMedia.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="bg-black bg-opacity-70 text-white text-sm px-3 py-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
