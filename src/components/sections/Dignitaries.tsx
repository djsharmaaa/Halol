'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';

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

const presidentMessage = {
  name: 'Smt. Nishaben Desai',
  role: 'Nagar Palika Pramukh',
  message: `“Halol is more than a city — it's a shared responsibility. Together, we shape its future.”

As the elected President of Halol Nagarpalika, I take great pride in leading a municipality that is rich in culture and committed to innovation. Our goal is to create a clean, green, and citizen-centric Halol, where every individual feels heard, valued, and supported.

We are working towards providing better civic services, enhancing sanitation, developing public spaces, and improving access to essential amenities for every resident. Our focus remains on inclusive urban development that respects both tradition and progress.

I invite every citizen of Halol to take part in our journey of growth, responsibility, and transformation. Together, we can build a city that future generations will be proud to inherit.`,
};

const officerMessage = {
  name: 'Smt. Hiral Thakar',
  role: 'Chief Officer',
  message: `“Governance with a purpose — transparency, technology, and transformation.”

As the Chief Officer of Halol Nagarpalika, my focus is on efficient, eco-conscious, and technology-enabled urban management. This digital platform is a step forward in making Halol’s governance more responsive, accessible, and accountable.

We are executing pioneering civic projects such as the 6,000 kg plastic recycling initiative, which converted waste into benches and tiles — significantly reducing our city’s carbon footprint. Our mission-driven campaigns like Krishna Vad Abhiyan align environmental action with cultural values.

At Halol Nagarpalika, we are committed to enhancing public services, enabling digital access, and building a sustainable city model that can inspire others across Gujarat and India.

Let’s move ahead together — towards a smart, green, and resilient Halol.`,
};

export default function Dignitaries() {
  const [cityInfo, setCityInfo] = useState<CityInfoType | null>(null);
  const [dignitaries, setDignitaries] = useState<DignitaryType[]>([]);
  const [selected, setSelected] = useState<DignitaryType | null>(null);

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
          name: 'Shri Hiral Thakar',
          designation: 'IAS',
          title: 'Administrator & Collector\nHalol Municipal Corporation',
          email: 'collector-halol@gujarat.gov.in',
          phone: '+91 2692 262271',
          image: 'https://res.cloudinary.com/dob666wa0/image/upload/v1744741794/about-me_iis39m.jpg',
        },
        {
          name: 'Smt. Nishaben Desai',
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

  const getMessage = (name: string) => {
    if (name.includes('Nishaben')) return presidentMessage;
    if (name.includes('Hiral')) return officerMessage;
    return null;
  };

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
              <div key={idx} className="grid grid-cols-2 gap-y-2 border-b-4 border-gray-300 dark:border-gray-600 pb-4">
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
                onClick={() => setSelected(dignitary)}
                className="bg-white dark:bg-[#1f2937] shadow-md rounded-lg overflow-hidden text-center p-4 hover:shadow-xl transition cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image src={dignitary.image} alt={dignitary.name} fill className="object-cover rounded-md" />
                </div>
                <div className="mt-4 text-[#0d1b4c] dark:text-white font-semibold text-lg">{dignitary.name}</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{dignitary.designation}</div>
                <div className="mt-2 text-blue-700 dark:text-blue-400 text-sm whitespace-pre-line">{dignitary.title}</div>
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

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-lg overflow-hidden relative flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
   
            {/* Image Left */}
            <div className="relative w-full md:w-1/2 h-96 md:h-auto">
              <Image src={selected.image} alt={selected.name} fill className="object-cover  " />
            </div>

            {/* Content Right */}
            <div className="p-6 md:p-8 w-full md:w-1/2 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                onClick={() => setSelected(null)}
              >
                <FaTimes size={20} />
              </button>
              <h3 className="text-xl font-bold text-[#b34700] mb-2">{selected.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{selected.designation}</p>
              <p className="text-sm text-blue-600 dark:text-blue-300 mb-4 whitespace-pre-line">{selected.title}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-800 dark:text-gray-200"><strong>Email:</strong> {selected.email}</p>
                <p className="text-sm text-gray-800 dark:text-gray-200"><strong>Phone:</strong> {selected.phone}</p>
              </div>
              {/* Conditional message */}
           {/* Conditional message */}
<div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line mt-4 max-h-[300px] overflow-y-auto pr-2">
  <p className="font-bold mb-2">Message:</p>
  {selected.name.includes('Nishaben')
    ? presidentMessage.message
    : selected.name.includes('Hiral')
    ? officerMessage.message
    : 'No personal message available.'} 
</div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
