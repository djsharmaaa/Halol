'use client';

import Link from 'next/link';

export default function TourismNavbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 text-white bg-transparent">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Centered Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:underline">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
              Halol Tourism
            </h1>
          </Link>
        </div>

        {/* Nav Links on Right */}
        <div className="ml-auto space-x-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/tourism" className="hover:underline">Tourism</Link>
        </div>
      </div>
    </nav>
  );
}
