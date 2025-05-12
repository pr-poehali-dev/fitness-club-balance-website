
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470",
    title: "Тренажерный зал",
    category: "spaces"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1469",
    title: "Кардиозона",
    category: "spaces"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470",
    title: "Групповые занятия",
    category: "activities"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=1469",
    title: "Персональный тренинг",
    category: "activities"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1652878337599-0199ebe613c7?q=80&w=1470",
    title: "Зона отдыха",
    category: "spaces"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1470",
    title: "Йога класс",
    category: "activities"
  }
];

const GallerySection = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-effect');
      
      parallaxElements.forEach((element, index) => {
        const scrollPosition = window.scrollY;
        const elementTop = element.getBoundingClientRect().top + scrollPosition;
        const elementPosition = elementTop - scrollPosition;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight && elementPosition > -element.clientHeight) {
          const offset = (elementPosition - windowHeight) * 0.1;
          const direction = index % 2 === 0 ? 1 : -1;
          element.setAttribute('style', `--parallax-offset: ${offset * direction}px`);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <section id="gallery" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -left-20 top-20 w-40 h-40 mask-diamond bg-primary/20 transform -rotate-15"></div>
      <div className="absolute -right-20 bottom-20 w-40 h-40 mask-diamond bg-secondary/20 transform rotate-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наш фитнес-клуб</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в атмосферу нашего фитнес-клуба Баланс. Современные тренажеры, комфортные зоны и профессиональные инструкторы ждут вас.
          </p>
          
          <div className="flex justify-center mt-8 mb-10 space-x-4">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setFilter('all')}
            >
              Все
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'spaces' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setFilter('spaces')}
            >
              Залы и пространства
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'activities' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setFilter('activities')}
            >
              Занятия
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg parallax-effect group"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${hoveredImage === image.id ? 'opacity-100' : 'opacity-90'}`}>
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {image.category === 'spaces' ? 'Пространство' : 'Активность'}
                </p>
                <button className="mt-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded w-full md:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-white/30">
                  <Icon name="Eye" className="mr-2 h-4 w-4" />
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-colors inline-flex items-center">
            <Icon name="Images" className="mr-2 h-5 w-5" />
            Больше фотографий
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
