import AboutUs from "../../components/sections/about/AboutUs";
import MilestoneSection from "../../components/sections/about/MilestonesSection";
import GeographySection from "../../components/sections/about/GeographySection";


export default function About() {
  return (
    <>
     
      <main className="relative">
    <AboutUs/>
    <MilestoneSection/>
    <GeographySection/>
      </main>
    </>
  );
}
