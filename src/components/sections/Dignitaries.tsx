'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { MdEmail, MdPhone } from 'react-icons/md';

type CityInfoType = {
  title: string;
  info: { label: string; value: string }[];
};

type DignitaryType = {
  name: string;
  designation: string;
  title: string;
  email: string;
  phone: string;
  image: string;
};

export default function Dignitaries() {
  const [cityInfo, setCityInfo] = useState<CityInfoType | null>(null);
  const [dignitaries, setDignitaries] = useState<DignitaryType[]>([]);

  useEffect(() => {
    const mockData = {
      cityInfo: {
        title: 'Halol City Info',
        info: [
          { label: 'Country', value: 'INDIA' },
          { label: 'State', value: 'Gujarat' },
          { label: 'City', value: 'Halol' },
          { label: 'Area', value: '85.67 SQ.KM.' },
          { label: 'Population (2011)', value: '292143' },
          { label: 'Population (2024)', value: '400378' },
          { label: 'Time Zone', value: 'IST (UTC +5:30)' },
          { label: 'Zip Code', value: '388001' },
        ],
      },
      dignitaries: [
        {
          name: 'Shri Praveen Chaudhary',
          designation: 'IAS',
          title: 'Administrator & Collector\nHalol Municipal Corporation',
          email: 'collector-halol@gujarat.gov.in',
          phone: '+91 2692 262271',
          image: 'https://res.cloudinary.com/dob666wa0/image/upload/v1744741794/about-me_iis39m.jpg',
        },
        {
          name: 'Shri Milind Bapna',
          designation: 'IAS',
          title: 'Municipal Commissioner\nHalol Municipal Corporation',
          email: 'amc-halol@gujarat.gov.in',
          phone: '+91 2692 243942',
          image: 'https://res.cloudinary.com/dob666wa0/image/upload/v1744741793/Aditi2_utnpcq.jpg',
        },
      ],
    };

    setCityInfo(mockData.cityInfo);
    setDignitaries(mockData.dignitaries);
  }, []);

  if (!cityInfo) return <div className="p-10 text-center dark:text-white">Loading...</div>;

  return (

    <section className="bg-[#f9f7f3] dark:bg-[#111827] pt-16 sm:pt-20 md:pt-24 pb-16 px-4 sm:px-6 md:px-16 transition-colors duration-300">

      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* City Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-[#0d1b4c] dark:text-white mb-10 text-center">
            {cityInfo.title}
          </h2>

          <div className="space-y-6">
            {cityInfo.info.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 gap-y-2 border-b-4 border-gray-300 dark:border-gray-600 pb-4"
              >
                <div className="font-semibold text-[#333] dark:text-gray-100">{item.label}</div>
                <div className="text-right text-gray-700 dark:text-gray-300">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dignitaries */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-[#0d1b4c] dark:text-white mb-10 text-center">
            Dignitaries of Halol
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {dignitaries.map((dignitary, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#1f2937] shadow-md dark:shadow-none rounded-lg overflow-hidden text-center p-4 hover:shadow-lg transition"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={dignitary.image}
                    alt={dignitary.name}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>

                {/* Details */}
                <div className="mt-4 text-[#0d1b4c] dark:text-white font-semibold text-lg">
                  {dignitary.name}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {dignitary.designation}
                </div>
                <div className="mt-2 text-blue-700 dark:text-blue-400 text-sm whitespace-pre-line">
                  {dignitary.title}
                </div>

                {/* Contact */}
                <div className="mt-3 flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300 items-center">
                  <div className="flex gap-2 items-center">
                    <MdEmail className="text-blue-600" />
                    <a href={`mailto:${dignitary.email}`} className="hover:underline">{dignitary.email}</a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdPhone className="text-blue-600" />
                    <a href={`tel:${dignitary.phone}`} className="hover:underline">{dignitary.phone}</a>
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
