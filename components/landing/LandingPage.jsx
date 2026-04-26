import { landingContent } from "../../data/landing-page-content";
import HeroSection from "./sections/HeroSection";
import ProblemSolutionSection from "./sections/ProblemSolutionSection";
import BenefitsSection from "./sections/BenefitsSection";
import SocialProofSection from "./sections/SocialProofSection";
import ProductDetailsSection from "./sections/ProductDetailsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import TopNav from "./TopNav";

export default function LandingPage() {
  return (
    <main>
      <TopNav />
      <HeroSection content={landingContent} />
      <ProblemSolutionSection content={landingContent.problemSolution} />
      <BenefitsSection items={landingContent.benefits} />
      <SocialProofSection testimonials={landingContent.testimonials} />
      <ProductDetailsSection
        product={landingContent.product}
        features={landingContent.features}
      />
      <HowItWorksSection items={landingContent.howItWorks} />
      <PricingSection pricing={landingContent.pricing} />
      <FAQSection faqs={landingContent.faqs} />
      <FinalCTASection content={landingContent.finalCta} />
    </main>
  );
}
