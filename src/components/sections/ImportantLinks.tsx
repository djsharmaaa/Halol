'use client';

import Image from 'next/image';

const links = [
  { icon: '/images/death-certificate.png', label: 'Birth/Death Certificate' },
  { icon: '/images/tax.png', label: 'Property tax' },
  { icon: '/images/water-dept.png', label: 'Water bills' },
  { icon: '/images/recruitments.png', label: 'Service recruitment' },
  { icon: '/images/dog.png', label: 'Dog license' },
  { icon: '/images/tenders.png', label: 'Tender' },
  { icon: '/images/quotations.png', label: 'Quotation' },
  { icon: '/images/whats-new.png', label: "What's new" },
  { icon: '/images/press.png', label: 'Press release' },
  { icon: '/images/Health.png', label: 'Health licenses' },
  { icon: '/images/Building.png', label: 'MyBMC Building ID' },
  { icon: '/images/swimming-pool.png', label: 'Swimming pool' },
];

export default function ImportantLinks() {
  return (
    <section className="py-16 bg-white
     dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-8">
          IMPORTANT LINKS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {links.map((link, idx) => (
            <div
              key={idx}
              className="bg-white  dark:bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={48}
                height={48}
                className="object-contain"
              />
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {link.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
