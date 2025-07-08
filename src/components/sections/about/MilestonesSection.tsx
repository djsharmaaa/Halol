'use client';

import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaFlagCheckered } from 'react-icons/fa';

type Milestone = {
  year: string;
  title: string;
  description: string;
};

// Simulated backend data
const fetchMilestones = async (): Promise<Milestone[]> => [
  {
    year: '2020',
    title: 'Incorporation',
    description: 'Municipality officially formed.',
  },
  {
    year: '2021',
    title: 'Smart Services Launch',
    description: 'Introduced water/e-governance portals.',
  },
  {
    year: '2022',
    title: 'Digital Literacy Drive',
    description: 'Trained 500+ citizens across Halol.',
  },
  {
    year: '2023',
    title: 'Heritage Day Fest',
    description: 'Organized civic heritage cultural festival.',
  },
];

export default function Milestones() {
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  useEffect(() => {
    fetchMilestones().then(setMilestones);
  }, []);

  return (
    <section className="py-12 bg-[#faf8f7] dark:bg-gray-900 transition-colors px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">

        Our <span className="text-[#b34700]">Milestones</span>
      </h2>

      <VerticalTimeline
        layout="1-column"
        lineColor="#b34700"
        className="scale-[0.9] sm:scale-[0.85] md:scale-[0.8] origin-top"
      >
        {milestones.map((milestone, index) => (
          <VerticalTimelineElement
            key={index}
            date={milestone.year}
            icon={<FaFlagCheckered />}
            iconStyle={{ background: '#b34700', color: '#fff' }}
            contentStyle={{
              background: 'var(--tw-bg-opacity, 1) white',
              color: '#333',
              padding: '12px 16px',
              minHeight: '80px',
              borderTop: '3px solid #b34700',
            }}
            contentArrowStyle={{ borderRight: '7px solid #b34700' }}
          >
            <h3 className="text-sm font-semibold text-[#001845] dark:text-white">
              {milestone.title}
            </h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
              {milestone.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
