'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import dynamic from "next/dynamic";

// Lazy load Loader
const Loader = dynamic(() => import("./Loader"), {
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  ),
  ssr: false,
});
export default function ClientLayout({ children }) {

  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Hide default layout elements on /tourism page
  const isTourismPage = pathname.startsWith("/tourism");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {!isTourismPage && <Navbar />}
      <main className="min-h-[calc(100vh-140px)]">{children}</main>
      { <Footer />}
    </>
  );
}
