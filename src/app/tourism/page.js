import TourismBanner from "../../components/sections/TourismBanner";
import TourismNavbar from "../../components/sections/TourismNavbar"; // ⬅️ custom navbar

export default function TourismPage() {
  return (
    <>
      <TourismNavbar />
      <main className="relative">
        <TourismBanner />
      </main>
    </>
  );
}
