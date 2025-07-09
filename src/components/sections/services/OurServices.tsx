  'use client';

  import { useState } from 'react';
  import { FaPhone, FaUser, FaWater, FaCity, FaRecycle, FaBook, FaGlobeAsia, FaLightbulb, FaSchool, FaChartPie, FaClinicMedical, FaTools } from 'react-icons/fa';
  import { MdClose } from 'react-icons/md';

  type Department = {
    title: string;
    officer: string;
    contact: string;
    services: string[];
    icon: JSX.Element;
    bg: string;
  };

  const departments: Department[] = [
    {
      title: 'Public Health Department',
      officer: 'Health Officer',
      contact: 'To be updated',
      services: [
        'Urban sanitation and hygiene',
        'Public toilets maintenance',
        'Health inspections at hotels and markets',
        'Control of vector-borne diseases',
      ],
      icon: <FaClinicMedical className="text-xl" />,
      bg: 'bg-[#fdebd0]',
    },
    {
      title: 'Solid Waste Management & Sanitation',
      officer: 'Sanitation Supervisor',
      contact: 'To be updated',
      services: [
        'Door-to-door garbage collection',
        'Solid waste disposal and landfill maintenance',
        'Street sweeping and cleanliness campaigns',
        'Awareness on plastic bans and composting',
      ],
      icon: <FaRecycle className="text-xl" />,
      bg: 'bg-[#d5f5e3]',
    },
    {
      title: 'Tax Department',
      officer: 'Revenue Officer / Tax Superintendent',
      contact: 'To be updated',
      services: [
        'Property tax collection',
        'Water tax billing',
        'Tax recovery and online portal support',
      ],
      icon: <FaChartPie className="text-xl" />,
      bg: 'bg-[#f9e79f]',
    },
    {
      title: 'Engineering & Construction',
      officer: 'City Engineer',
      contact: 'To be updated',
      services: [
        'Road & drainage maintenance',
        'Public buildings & park construction',
        'Estimation and technical approvals',
      ],
      icon: <FaTools className="text-xl" />,
      bg: 'bg-[#fadbd8]',
    },
    {
      title: 'Water Supply Department',
      officer: 'Water Works Supervisor',
      contact: 'To be updated',
      services: [
        '24x7 water supply',
        'Leak detection and repair',
        'Water metering and connections',
      ],
      icon: <FaWater className="text-xl" />,
      bg: 'bg-[#d6eaf8]',
    },
    {
      title: 'Accounts & Finance',
      officer: 'Chief Accountant',
      contact: 'To be updated',
      services: [
        'Budget planning',
        'Salary and fund disbursement',
        'Audit and financial compliance',
      ],
      icon: <FaChartPie className="text-xl" />,
      bg: 'bg-[#f5eef8]',
    },
    {
      title: 'Education & Library',
      officer: 'Education Officer',
      contact: 'To be updated',
      services: [
        'Municipal schools management',
        'Library maintenance',
        'Girl child education promotion',
      ],
      icon: <FaBook className="text-xl" />,
      bg: 'bg-[#e8f8f5]',
    },
    {
      title: 'Social Welfare & ICDS',
      officer: 'ICDS Supervisor',
      contact: 'To be updated',
      services: [
        'Anganwadi and nutrition programs',
        'Support for SC/ST, elderly and disabled',
      ],
      icon: <FaGlobeAsia className="text-xl" />,
      bg: 'bg-[#fdf2e9]',
    },
    {
      title: 'Agriculture & Animal Husbandry',
      officer: 'Veterinary / Agriculture Officer',
      contact: 'To be updated',
      services: [
        'Animal vaccination & health camps',
        'Dairy and poultry promotion',
        'Farmer advisory services',
      ],
      icon: <FaCity className="text-xl" />,
      bg: 'bg-[#fcf3cf]',
    },
    {
      title: 'Panchayat & Coordination',
      officer: 'Panchayat Officer',
      contact: 'To be updated',
      services: [
        'Coordination with Gram Panchayats',
        'Village development schemes',
      ],
      icon: <FaLightbulb className="text-xl" />,
      bg: 'bg-[#dcdcdc]',
    },
    {
      title: 'IT & E-Governance',
      officer: 'IT Officer / System Admin',
      contact: 'To be updated',
      services: [
        'Website & digital platform maintenance',
        'Online services (grievance, tax, forms)',
        'Cybersecurity & Smart City support',
      ],
      icon: <FaGlobeAsia className="text-xl" />,
      bg: 'bg-[#fbeee6]',
    },
  ];

  export default function Departments() {
    const [selected, setSelected] = useState<Department | null>(null);

    return (
      <section className="py-16 px-4 bg-[#ecf3d8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Municipal <span className="text-[#b34700]">Departments</span>
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(dept)}
                className={`group ${dept.bg} p-6 rounded-xl cursor-pointer shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all`}
              >
                <div className="flex items-center gap-3 mb-2 text-[#b34700]">
                  <span>{dept.icon}</span>
                  <h3 className="text-lg font-semibold">{dept.title}</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-800 line-clamp-2">
                  {dept.services.slice(0, 2).join(', ')}...
                </p>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selected && (
            <div
              className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
              onClick={() => setSelected(null)}
            >
              <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-xl"
                >
                  <MdClose />
                </button>
                <h3 className="text-xl font-bold text-[#b34700] mb-4">{selected.title}</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  {selected.services.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <FaUser className="text-[#b34700]" /> Officer: {selected.officer}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-[#b34700]" /> Contact: {selected.contact}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
