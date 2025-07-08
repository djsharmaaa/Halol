'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Service {
  id: number;
  title: string;
  imageUrl: string;
  href?: string;
}

export default function DepartmentSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const mockData: Service[] = [
        {
          id: 1,
          title: 'Departments',
          imageUrl: '/images/departments.jpg',
          href: '/services/departments',
        },
        {
          id: 2,
          title: 'City Visitors Guide',
          imageUrl: '/images/visitors.jpg',
          href: '/services/guide',
        },
        {
          id: 3,
          title: 'Administrations',
          imageUrl: '/images/admin.jpg',
          href: '/services/administrations',
        },
      ];

      setServices(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="bg-[#faf8f7] dark:bg-gray-900 py-12 px-4 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Title + Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white max-w-xl">
            Various public services of the <br />Municipal Corporation.
          </h2>
        <button className="border border-[#b34725] text-[#b34725] hover:bg-[#b34725] hover:text-white rounded-full px-6 py-2 transition">
            Explore services
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading services...</p>
          ) : (
            services.map((service) => (
              <Link
                key={service.id}
                href={service.href || '#'}
                className="group bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative w-full h-60"> {/* Increased height */}
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center py-5 font-semibold text-lg text-gray-800 dark:text-white group-hover:text-[#b34725] transition-colors">
                  {service.title}
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Description Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Anand Municipal Corporation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              A municipal corporation is a local self-government institution run by the people,
              for the people for a city. It has a specific area and the people living in it
              come under the jurisdiction of that local government.
            </p>
            <blockquote className="border-l-4 border-red-600 pl-4 text-sm italic text-[#001845] dark:text-white">
              “ Gujarat is the Gangotri of cooperative activities. Anand is known as the
              that took place here in 1970. ”
            </blockquote>
            <div className="mt-4 flex items-center gap-3 text-red-600 font-medium text-sm cursor-pointer">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ▶
              </div>
              <div>
                Video Intro <br />
                <span className="text-gray-600 dark:text-gray-400 text-xs">About Our Municipal</span>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/departments.jpg"
              alt="Municipal Building"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
