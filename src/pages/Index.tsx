
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Create a favicon if it doesn't exist
    const favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "https://cdn.poehali.dev/files/6f8238fc-a520-402a-8658-21ccf29cb733.png";
      document.head.appendChild(newFavicon);
    }
    
    // Update page title
    document.title = "Фитнес-клуб «Баланс» | Идеальный баланс тела и духа";
    
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors z-30"
        aria-label="Вернуться наверх"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
