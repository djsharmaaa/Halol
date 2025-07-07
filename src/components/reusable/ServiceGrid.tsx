'use client';

import Image from 'next/image';

const services = [
  { icon: '/images/press.png', label: 'Professional Tax', href: 'https://example.com/professional' },
  { icon: '/images/death-certificate.png', label: 'Birth/Death Certificate', href: 'https://example.com/birth-death' },
  { icon: '/images/water-dept.png', label: 'Water Tax', href: 'https://example.com/water' },
  { icon: '/images/tax.png', label: 'Property Tax', href: 'https://example.com/property' },
  { icon: '/images/health.png', label: 'Marriage Registration', href: 'https://example.com/marriage' },
];

export default function ServiceGrid() {
  return (
    <div className="-translate-y-1/2 z-20 relative px-4 sm:px-6">
      <div className="bg-[#b34725] dark:bg-gray-800 py-6 px-2 sm:px-4 shadow-xl rounded-xl max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-2 sm:gap-4">
          {services.map((service, i) => (
            <a
              key={i}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center text-center bg-[#ecf3d8] dark:bg-gray-700 rounded-lg px-1.5 py-3 sm:px-3 sm:py-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={service.icon}
                alt={service.label}
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
              <p className="mt-1 text-[10px] sm:text-xs md:text-sm font-medium text-gray-900 group-hover:text-[#b34725] dark:text-gray-100 dark:group-hover:text-blue-400">
                {service.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
