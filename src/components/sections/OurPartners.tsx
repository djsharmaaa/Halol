'use client';

import Image from 'next/image';

const partners = [
  { src: '/images/data_gov.png', alt: 'Data Gov', link: 'https://data.gov.in/' },
  { src: '/images/digital_india.png', alt: 'Digital India', link: 'https://www.digitalindia.gov.in/' },
  { src: '/images/incradible_india.png', alt: 'Incredible India', link: 'https://www.incredibleindia.org/' },
  { src: '/images/india_gov_in.png', alt: 'India Gov', link: 'https://india.gov.in/' },
  { src: '/images/pm_india.png', alt: 'MyGov', link: 'https://www.mygov.in/' },
];

export default function OurPartners() {
  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-36 h-16 sm:w-44 sm:h-20 transition-all"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain filter blur-[1px] group-hover:blur-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
