'use client';

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGoogle } from 'react-icons/fa';
import { MdAccessTime, MdPhone, MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#0d1b4c] text-white pt-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo and Address */}
        <div>
          <Image
            src="/images/Halol-logo.png"
            alt="Halol Municipal Corporation"
            width={120}
            height={120}
          />
          <h2 className="text-lg font-semibold mt-4">Halol Municipal Corporation</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Railway Station Road, Gamdivad, Sardar Gunj, Halol
          </p>

          {/* Visitor Counter */}
          <p className="mt-3 text-sm text-gray-300">
            👁️ Visitors: <span className="font-semibold text-white">12,345</span>
          </p>
        </div>

        {/* Service Request */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Request</h3>
          <ul className="space-y-2 text-sm">
            <li>Garvi - Jantri</li>
            <li>Agriculture Benefits</li>
            <li>Election Commission</li>
            <li>Online RTI</li>
            <li>eNagar</li>
            <li>Land Record</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Halol District</li>
            <li>Halol Collector Office</li>
            <li>Halol District Panchayat</li>
            <li>Halol Police</li>
            <li>Chief Electoral Officer Gujarat</li>
            <li>Swagat CMO Gujarat</li>
          </ul>
        </div>

        {/* Opening Hours and Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Opening Hours:</h3>
          <ul className="text-sm space-y-2">
            <li className="flex gap-2 items-start">
              <MdAccessTime className="mt-1" />
              <span>
                <strong>Monday to Saturday:</strong><br />
                10:00 am – 6:00 pm<br />
                Sunday Closed
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> (02692) 243942 / 243944
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> amc-halol@gujarat.gov.in
            </li>
          </ul>
          <div className="mt-4">
            <div className="bg-white inline-block p-1 rounded text-sm text-black">🌐 Select Language ▼</div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-screen-xl mx-auto mt-10 px-6 flex justify-center md:justify-end gap-5 text-white text-xl">
        <FaGoogle className="hover:text-[#2e7d3c] cursor-pointer" />
        <FaTwitter className="hover:text-[#2e7d3c] cursor-pointer" />
        <FaInstagram className="hover:text-[#2e7d3c] cursor-pointer" />
        <FaWhatsapp className="hover:text-[#2e7d3c] cursor-pointer" />
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 py-4 bg-[#091438] text-center text-sm">
        Halol Municipal Corporation - © 2025. All Rights Reserved
      </div>
    </footer>
  );
}
