import { landingContent } from "../../data/landing-page-content";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import RoomPricingSection from "./sections/RoomPricingSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import LocationSection from "./sections/LocationSection";
import RulesSection from "./sections/RulesSection";
import GallerySection from "./sections/GallerySection";
import ContactSection from "./sections/ContactSection";
import TopNav from "./TopNav";

export default function LandingPage() {
  return (
    <main>
      <TopNav />
      <HeroSection content={landingContent} />
      <AboutSection content={landingContent} />
      <RoomPricingSection rooms={landingContent.rooms} />
      <FacilitiesSection
        facilities={landingContent.facilities}
        utilities={landingContent.utilities}
      />
      <LocationSection location={landingContent.location} site={landingContent.site} />
      <RulesSection rules={landingContent.rules} />
      <GallerySection gallery={landingContent.gallery} />
      <ContactSection contact={landingContent.contact} />
    </main>
  );
}
