
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hero = document.getElementById('hero-content');
      if (hero) {
        hero.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        hero.style.opacity = `${1 - scrollPosition / 700}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Diamond Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 bg-accent">
        <div className="absolute right-0 top-[20%] w-48 h-48 mask-diamond bg-primary animate-pulse-slow"></div>
        <div className="absolute left-20 top-[40%] w-24 h-24 mask-diamond bg-secondary animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute right-32 bottom-[15%] w-36 h-36 mask-diamond bg-primary animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      {/* Content */}
      <div 
        id="hero-content"
        className={`container relative z-10 mx-auto px-4 text-center transition-all duration-700 transform ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Mascot */}
        <div className="absolute -right-10 md:right-0 top-0 md:top-10 w-32 md:w-40 lg:w-48 animate-bounce" style={{ animationDuration: "3s" }}>
          <img 
            src="https://cdn.poehali.dev/files/97265eaf-d166-4617-adf9-354f59779096.png" 
            alt="Балансик" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Фитнес-клуб <span className="text-primary">Баланс</span> – для идеального баланса тела и духа
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Современное оборудование, профессиональные тренеры и персональный подход. Начните свой путь к здоровью уже сегодня!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button className="bg-primary hover:bg-primary/80 text-white py-6 px-8 text-lg">
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Записаться на тренировку
            </Button>
            <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 py-6 px-8 text-lg backdrop-blur-sm">
              <Icon name="Info" className="mr-2 h-5 w-5" />
              Узнать подробнее
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-4xl font-bold text-white">5+</p>
              <p className="text-white/80">лет опыта</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-4xl font-bold text-white">1000+</p>
              <p className="text-white/80">довольных клиентов</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-white/80">профессиональных тренеров</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#services" className="flex flex-col items-center">
          <span className="text-sm mb-2">Узнать больше</span>
          <Icon name="ChevronDown" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
