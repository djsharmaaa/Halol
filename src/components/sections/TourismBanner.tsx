'use client';

export default function TourismBanner() {
  return (
    <section className="w-screen h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/images/nature2.mp4"
        autoPlay
        muted
        playsInline
        loop
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
