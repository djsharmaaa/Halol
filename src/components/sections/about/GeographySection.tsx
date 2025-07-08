'use client';

import React from 'react';

export default function Geography() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">

        Geography <span className="text-[#b34700]">& Structure</span>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              About Halol’s Location
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Halol is located in Panchmahal District of Gujarat and is just 5 km from the UNESCO World Heritage site — Champaner-Pavagadh.
              It’s a rapidly developing industrial and civic hub with a rich cultural history and growing infrastructure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Geographically, the city lies on the eastern border of Vadodara district and is well-connected to nearby towns and highways,
              making it a strategic center for commerce, urban development, and tourism.
            </p>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29485.824341907355!2d73.46998669999999!3d22.5143846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39607ff0f3c81f5b%3A0xf452949f1038b965!2sHalol%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1751992033951!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Halol Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
