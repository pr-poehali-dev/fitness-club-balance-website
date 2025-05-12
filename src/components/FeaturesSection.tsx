
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    id: 1,
    icon: "Dumbbell",
    title: "Современный тренажерный зал",
    description: "Оборудование мирового класса для эффективных тренировок любого уровня сложности."
  },
  {
    id: 2,
    icon: "Users",
    title: "Групповые занятия",
    description: "Разнообразные групповые программы для тренировок в компании единомышленников."
  },
  {
    id: 3,
    icon: "User",
    title: "Персональные тренировки",
    description: "Индивидуальный подход с учетом ваших целей, возможностей и особенностей здоровья."
  },
  {
    id: 4,
    icon: "HeartPulse",
    title: "Кардиозона",
    description: "Беговые дорожки, эллиптические тренажеры и велотренажеры для эффективных кардиотренировок."
  },
  {
    id: 5,
    icon: "Droplets",
    title: "СПА и сауна",
    description: "Восстановление и релаксация после интенсивных тренировок в нашей СПА-зоне."
  },
  {
    id: 6,
    icon: "Utensils",
    title: "Спортивное питание",
    description: "Консультации по питанию и богатый выбор спортивного питания для достижения ваших целей."
  }
];

const FeaturesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.feature-card');
      
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.9 && cardBottom > 0) {
          card.classList.add('opacity-100', 'translate-y-0');
          card.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-muted relative">
      {/* Diamond shapes decorations */}
      <div className="absolute left-0 top-0 w-20 h-20 mask-diamond bg-primary/20"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 mask-diamond bg-primary/30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем широкий спектр услуг, чтобы каждый мог найти подходящую для себя тренировку и достичь своих фитнес-целей.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="feature-card card-hover bg-white border-none shadow-md opacity-0 translate-y-10 transition-all duration-700" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-primary/10 rounded-xl p-8 relative">
          <img 
            src="https://cdn.poehali.dev/files/97265eaf-d166-4617-adf9-354f59779096.png" 
            alt="Балансик" 
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-auto"
          />
          <h3 className="text-2xl font-bold mb-4">Нужна консультация?</h3>
          <p className="mb-6 max-w-3xl mx-auto">
            Наши специалисты готовы ответить на все ваши вопросы и помочь подобрать оптимальную программу тренировок.
            Оставьте заявку, и мы свяжемся с вами в ближайшее время.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-colors">
              <Icon name="Calendar" className="inline-block mr-2 h-5 w-5" /> 
              Записаться на тренировку
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors">
              <Icon name="Phone" className="inline-block mr-2 h-5 w-5" /> 
              Позвонить нам
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
