import Banner from "../components/sections/Banner";
import ImportantLinks from "../components/sections/ImportantLinks";
import Dignitaries from "../components/sections/Dignitaries";
import ServiceGrid from "../components/reusable/ServiceGrid";
import MediaGallery from "../components/sections/MediaGallery";
import OurPartners from "../components/sections/OurPartners";
import DepartmentSection from "../components/sections/DepartmentSection";


export default function Home() {
  return (
    <main className=" mg-50 min-h-screen bg-[#f9f7f3] dark:bg-[#111827]">
      {/* Banner section with relative wrapper */}
      <div className=" z-0">

        <Banner />

        {/* Overlapping ServiceGrid */}
        <div className="absolute  left-0 w-full z-10">
          <ServiceGrid /> 
        </div>
      </div>

      {/* Dignitaries start immediately under Banner, with padding removed */}
      <div className="relative ">
        <Dignitaries />
      </div>
      <ImportantLinks />
      <DepartmentSection/>
      <MediaGallery/>
      <OurPartners/>
  
    </main>
  );
}
