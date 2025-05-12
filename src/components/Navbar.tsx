
import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/6f8238fc-a520-402a-8658-21ccf29cb733.png"
              alt="Баланс"
              className="h-9 mr-2"
            />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-accent' : 'text-white'}`}>
              Баланс
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className={`${isScrolled ? 'text-accent' : 'text-white'} hover:text-primary transition-colors`}>
            Услуги
          </a>
          <a href="#about" className={`${isScrolled ? 'text-accent' : 'text-white'} hover:text-primary transition-colors`}>
            О нас
          </a>
          <a href="#gallery" className={`${isScrolled ? 'text-accent' : 'text-white'} hover:text-primary transition-colors`}>
            Галерея
          </a>
          <a href="#trainers" className={`${isScrolled ? 'text-accent' : 'text-white'} hover:text-primary transition-colors`}>
            Тренеры
          </a>
          <a href="#testimonials" className={`${isScrolled ? 'text-accent' : 'text-white'} hover:text-primary transition-colors`}>
            Отзывы
          </a>
          <a href="#contacts" className={`${isScrolled ? 'text-accent' : 'text-white'} hover:text-primary transition-colors`}>
            Контакты
          </a>
          <Button className="bg-primary hover:bg-primary/80 text-white">
            <Icon name="PhoneCall" className="mr-2 h-4 w-4" />
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          <Icon 
            name={isMobileMenuOpen ? "X" : "Menu"} 
            className={`h-6 w-6 ${isScrolled ? 'text-accent' : 'text-white'}`} 
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#services" className="text-accent hover:text-primary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Услуги
            </a>
            <a href="#about" className="text-accent hover:text-primary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              О нас
            </a>
            <a href="#gallery" className="text-accent hover:text-primary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Галерея
            </a>
            <a href="#trainers" className="text-accent hover:text-primary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Тренеры
            </a>
            <a href="#testimonials" className="text-accent hover:text-primary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Отзывы
            </a>
            <a href="#contacts" className="text-accent hover:text-primary py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Контакты
            </a>
            <Button className="bg-primary hover:bg-primary/80 text-white w-full justify-center">
              <Icon name="PhoneCall" className="mr-2 h-4 w-4" />
              Записаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
