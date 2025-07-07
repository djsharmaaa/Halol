'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import ThemeToggle from './ThemeToggle';
import {
  MdHome,
  MdInfo,
  MdMiscellaneousServices,
  MdLanguage,
  MdWeb,
  MdAnnouncement,
  MdContacts,
  MdReportProblem,
} from 'react-icons/md';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navLinks = [
    { href: '/', label: 'Home', icon: <MdHome size={18} /> },
    { href: '/about', label: 'About Us', icon: <MdInfo size={18} /> },
    { href: '/services', label: 'Services', icon: <MdMiscellaneousServices size={18} /> },
    { href: '/e-governance', label: 'E-Governance', icon: <MdLanguage size={18} /> },
    { href: '/online-services', label: 'Online Services', icon: <MdWeb size={18} /> },
    { href: '/news', label: 'NEWS', icon: <MdAnnouncement size={18} /> },
    { href: '/contacts', label: 'CONTACTS', icon: <MdContacts size={18} /> },
    { href: '/complaint', label: 'COMPLAINT', icon: <MdReportProblem size={18} /> },
  ];
  return (
    <header className="relative w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#b34725] text-white dark:bg-gray-500 text-sm px-4 sm:px-8 py-1 flex justify-between items-center">
        <div>
          CALL: 98795 62390 &nbsp; | &nbsp; OPEN HOURS: 10:00 AM - 6:00 PM
        </div>
        <div className="hidden sm:flex gap-4">
          <Link href="/news" className="hover:underline">NEWS</Link>
          <Link href="/contacts" className="hover:underline">CONTACTS</Link>
          <Link href="/complaint" className="hover:underline">COMPLAINT</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white dark:bg-gray-900 shadow-md px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/halol-logo.png" // Replace with actual logo
            alt="Halol Nagarpalika"
            width={60}
            height={60}
          />
          <div>
            <div className="text-lg font-bold text-[#b34725] dark:text-white leading-5">
              HALOL NAGARPALIKA
            </div>
            <div className="text-sm text-[#b34725] dark:text-white font-medium">
              હાલોલ નગરપાલિકા
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href} className="block">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-gray-900/60 transition-all duration-300 md:hidden flex justify-center">
          <div className="w-[92%] max-w-xs mt-2  px-4 py-5 space-y-3 ">
            {navLinks.map((item, idx) => (
  <Link
    key={idx}
    href={item.href}
    onClick={() => setIsMenuOpen(false)}
    className="flex justify-between items-center text-left text-[13px] sm:text-sm font-medium text-gray-800 dark:text-white bg-[#f9f7f3] dark:bg-gray-700 hover:bg-[#b34725] hover:text-white dark:hover:bg-[#b34725] py-2 px-4 rounded-md transition-colors"
  >
    <span>{item.label}</span>
    <span className="text-xl">{item.icon}</span>
  </Link>
))}

                    </div>
        </div>
      )}
    </header>
  );
}
