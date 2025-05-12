import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    role: "Клиент 1 год",
    content:
      "Фитнес-клуб «Баланс» полностью изменил мой подход к тренировкам. Внимательные тренеры, современное оборудование и дружелюбная атмосфера заставляют меня возвращаться снова и снова.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287",
    rating: 5,
  },
  {
    id: 2,
    name: "Михаил Иванов",
    role: "Клиент 6 месяцев",
    content:
      "Начал заниматься в «Балансе» полгода назад и уже вижу значительные результаты. Персональные тренировки с Алексеем помогли мне правильно составить программу и добиться целей гораздо быстрее, чем я ожидал.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287",
    rating: 5,
  },
  {
    id: 3,
    name: "Екатерина Смирнова",
    role: "Клиент 2 года",
    content:
      "Групповые занятия в «Балансе» — это не только эффективные тренировки, но и отличная компания. Хожу на йогу и пилатес уже два года и всегда получаю заряд энергии и позитива.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361",
    rating: 4,
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    role: "Клиент 3 месяца",
    content:
      "Недавно стал клиентом фитнес-клуба «Баланс» и уже чувствую себя частью семьи. Особенно впечатлила зона кардио и приветливый персонал, который всегда готов помочь.",
    avatar:
      "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1336",
    rating: 4,
  },
  {
    id: 5,
    name: "Ольга Никитина",
    role: "Клиент 1.5 года",
    content:
      "Спа-зона в «Балансе» — это отдельный повод ходить в этот фитнес-клуб. После интенсивной тренировки всегда приятно расслабиться в сауне и восстановить силы.",
    avatar:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1476",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient relative">
      {/* Visual elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 w-40 h-40 mask-diamond bg-white/10 rotate-12"></div>
        <div className="absolute -left-20 bottom-20 w-40 h-40 mask-diamond bg-white/10 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Отзывы наших клиентов
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Мнения тех, кто уже стал частью нашей дружной семьи и достигает
            своих фитнес-целей вместе с нами.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start mb-4">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-white">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-primary text-white">
                            {testimonial.name.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex text-yellow-300 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name={i < testimonial.rating ? "Star" : "StarOff"}
                            className="h-4 w-4"
                          />
                        ))}
                      </div>

                      <p className="text-white/90 flex-grow mb-4">
                        "{testimonial.content}"
                      </p>

                      <div className="flex justify-end">
                        <Icon name="Quote" className="h-6 w-6 text-white/40" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white text-accent hover:bg-white/90" />
              <CarouselNext className="bg-white text-accent hover:bg-white/90" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white max-w-2xl">
            <div className="mr-4 hidden md:block">
              <img
                src="https://cdn.poehali.dev/files/b885353d-000f-4494-bca0-cb765cac23a3.png"
                alt="Балансик"
                className="w-24 h-auto"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">
                Присоединяйтесь к нам!
              </h3>
              <p className="mb-4">
                Станьте частью нашего сообщества и поделитесь своей историей
                успеха в будущем.
              </p>
              <button className="bg-white text-accent hover:bg-white/90 px-4 py-2 rounded-md transition-colors flex items-center">
                <Icon name="Calendar" className="mr-2 h-4 w-4" />
                Записаться на пробную тренировку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
