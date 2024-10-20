import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PrivacySection } from "@/components/layout/sections/privacy";
import { TermsSection } from "@/components/layout/sections/terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPToid - Telegram bot with ChatGPT access",
  description: "GPToid is a Telegram bot that allows talking with ChatGPT and image generation using DALL-E 3. Free tier, built-in roles, custom prompts, beautiful formatting.",
  openGraph: {
    type: "website",
    url: "https://github.com/kapxapot/aws-gpt-bot",
    title: "GPToid - Telegram bot with ChatGPT access",
    description: "GPToid is a Telegram bot that allows talking with ChatGPT and image generation using DALL-E 3",
    images: [
      {
        url: "https://i.imgur.com/GI3Exjr.png",
        width: 1200,
        height: 630,
        alt: "GPToid - Telegram bot with ChatGPT access",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/kapxapot/aws-gpt-bot",
    title: "GPToid - Telegram bot with ChatGPT access",
    description: "GPToid is a Telegram bot that allows talking with ChatGPT and image generation using DALL-E 3",
    images: [
      "https://i.imgur.com/GI3Exjr.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      {/* <ServicesSection /> */}
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      <CommunitySection />
      {/* <PricingSection /> */}
      <FAQSection />
      {/* <ContactSection /> */}
      <TermsSection />
      <PrivacySection />
      <FooterSection />
    </>
  );
}
