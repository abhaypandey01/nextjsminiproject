import FeaturedServices from "@/components/FeaturedServices";
import HeroSection from "@/components/HeroSection";
import OurConsultants from "@/components/OurConsultants";
import Testimonials from "@/components/Testimonials";
import Topprojects from "@/components/Topprojects";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <Topprojects />
      <OurConsultants />
    </main>
  );
}
