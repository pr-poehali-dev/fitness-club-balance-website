import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.poehali.dev/files/6f8238fc-a520-402a-8658-21ccf29cb733.png"
                alt="Баланс"
                className="h-10 mr-2"
              />
              <span className="text-2xl font-bold text-white">Баланс</span>
            </div>
            <p className="text-white/80 mb-4">
              Фитнес-клуб для идеального баланса тела и духа. Присоединяйтесь к
              нам и достигайте своих целей вместе с профессионалами.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon name="Vk" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Тренеры
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Тренажерный зал
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Групповые занятия
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Персональный тренинг
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Кардиозона
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  СПА и сауна
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Спортивное питание
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                />
                <span className="text-white/80">
                  г. Москва, ул. Спортивная, д. 123
                </span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Phone"
                  className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                />
                <span className="text-white/80">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Mail"
                  className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                />
                <span className="text-white/80">info@balance-fitness.ru</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Clock"
                  className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-white/80">Пн-Пт: 7:00 - 23:00</div>
                  <div className="text-white/80">Сб-Вс: 9:00 - 22:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/10 flex-wrap gap-4">
          <div className="text-white/60 text-sm">
            © 2023-2025 Фитнес-клуб «Баланс». Все права защищены.
          </div>
          <div className="flex space-x-4 text-sm text-white/60">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
