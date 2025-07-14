import { HeroSection } from "@/components/sections/HeroSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BuildAgentSection } from "@/components/sections/BuildAgentSection";
import { DiscoverPlatformSection } from "@/components/sections/DiscoverPlatformSection";
import { CustomerServiceSection } from "@/components/sections/CustomerServiceSection";
import { AIFeaturesSection } from "@/components/sections/AIFeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { CTASection } from "@/components/sections/CTASection";

export function Home() {
  return (
    <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
            {/* <HeroSection /> */}
            {/* <LogoSection /> */}
            {/* <HighlightsSection /> */}
            {/* <HowItWorksSection /> */}
            {/* <BuildAgentSection /> */}
            {/* <DiscoverPlatformSection /> */}
            {/* <CustomerServiceSection /> */}
            {/* <AIFeaturesSection /> */}
            {/* <TestimonialsSection /> */}
            {/* <SecuritySection /> */}
            <CTASection />
        </div>
    </main>
  );
}