import { LandingHeader } from "@/components/landing/LandingHeader";
import { MainVideoSection } from "@/components/landing/MainVideoSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { MediaVideosSection } from "@/components/landing/MediaVideosSection";
import { TrainingContentSection } from "@/components/landing/TrainingContentSection";
import { TargetAudienceSection } from "@/components/landing/TargetAudienceSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { InvestmentSection } from "@/components/landing/InvestmentSection";
import { TeachersSection } from "@/components/landing/TeachersSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ExitPopup } from "@/components/ExitPopup";
import { useEffect } from "react";

const Index = () => {
  // Set document title and meta tags for SEO
  useEffect(() => {
    document.title = "Sua Renda em Casa | Trabalhe do conforto da sua casa";
    
    // Add meta tags for SEO and social sharing
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Descubra como gerar renda extra a partir do conforto da sua casa, mesmo sem experiência prévia. Mais de 3.500 alunos já transformaram suas vidas financeiras.");
    }
    
    // Add Open Graph meta tags for better social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Sua Renda em Casa | Trabalhe do conforto da sua casa");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Descubra como gerar renda extra a partir do conforto da sua casa, mesmo sem experiência prévia. Mais de 3.500 alunos já transformaram suas vidas financeiras.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <LandingHeader />
      <MainVideoSection />
      <BenefitsSection />
      <MediaVideosSection />
      <TrainingContentSection />
      <TargetAudienceSection />
      <BonusSection />
      <TestimonialsSection />
      <InvestmentSection />
      <TeachersSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </div>
  );
};

export default Index;
