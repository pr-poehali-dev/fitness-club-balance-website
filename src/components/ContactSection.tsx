import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-muted relative">
      {/* Visual elements */}
      <div className="absolute right-0 top-0 w-24 h-24 mask-diamond bg-primary/20"></div>
      <div className="absolute left-10 bottom-10 w-16 h-16 mask-diamond bg-primary/20"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-muted-foreground mb-8">
              У вас остались вопросы или вы хотите записаться на пробную
              тренировку? Заполните форму, и мы свяжемся с вами в ближайшее
              время.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Спортивная, д. 123
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Часы работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 7:00 - 23:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 9:00 - 22:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Icon name="Mail" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">
                    info@balance-fitness.ru
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-3">
                Мы в социальных сетях
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Icon name="Instagram" className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Icon name="Facebook" className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Icon name="Vk" className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Icon name="Youtube" className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Имя
                      </label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        className="border-gray-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        placeholder="+7 (___) ___-__-__"
                        className="border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ваш@email.com"
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема
                    </label>
                    <select
                      id="subject"
                      className="w-full border border-gray-200 rounded-md h-10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Выберите тему</option>
                      <option value="trial">Пробная тренировка</option>
                      <option value="membership">Абонемент</option>
                      <option value="personal">Персональный тренинг</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Ваше сообщение..."
                      className="min-h-[120px] border-gray-200 focus:border-primary"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground"
                    >
                      Я согласен с{" "}
                      <a href="#" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/80 text-white py-6">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-6 flex items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <img
                    src="https://cdn.poehali.dev/files/b885353d-000f-4494-bca0-cb765cac23a3.png"
                    alt="Балансик"
                    className="w-12 h-auto mr-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Балансик и вся команда фитнес-клуба с нетерпением ждут
                    встречи с вами!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-xl overflow-hidden h-[400px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35631.377009487825!2d37.60789396977539!3d55.75499399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1652366905000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
