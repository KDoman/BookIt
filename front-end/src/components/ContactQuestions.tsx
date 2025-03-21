import { Accordion, AccordionItem } from "@heroui/react";
import { LayoutBox } from "./LayoutBox";
import { motion } from "framer-motion";

export const ContactQuestions = () => {
  const questions = [
    {
      title: "Czy korzystanie z BookIt jest darmowe?",
      question:
        "Tak! Rejestracja i rezerwacja usług przez BookIt są całkowicie darmowe. Płacisz jedynie za wybrane usługi bez żadnych ukrytych kosztów.",
    },
    {
      title: "Jak mogę anulować lub zmienić rezerwację?",
      question:
        "Anulowanie lub zmiana rezerwacji jest możliwa w Twoim profilu użytkownika. Wystarczy wejść w historię rezerwacji i postępować zgodnie z instrukcjami. Pamiętaj, że niektórzy specjaliści mogą mieć określony czas na anulację bez opłat.",
    },
    {
      title: "Czy mogę zarezerwować usługę bez zakładania konta?",
      question:
        "W większości przypadków tak, jednak posiadanie konta daje więcej korzyści, takich jak historia rezerwacji, łatwiejsze zarządzanie wizytami i dostęp do specjalnych ofert.",
    },
    {
      title: "Czy mogę dodać swoją firmę do BookIt?",
      question:
        "Tak! Jeśli jesteś specjalistą i chcesz dołączyć do BookIt, skontaktuj się z nami lub zarejestruj się jako usługodawca. Dzięki temu zyskasz nowy kanał pozyskiwania klientów i wygodne narzędzie do zarządzania rezerwacjami.",
    },
    {
      title: "Czy BookIt ma aplikację mobilną?",
      question:
        "Pracujemy nad aplikacją mobilną, która jeszcze bardziej usprawni proces rezerwacji. Wkrótce będzie dostępna do pobrania na systemy iOS i Android.",
    },
  ];

  return (
    <div className="px-2">
      <LayoutBox>
        <>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold uppercase my-10"
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "-200px", once: true }}
          >
            Najczęściej zadawane pytania
          </motion.h2>
          <LayoutBox>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ margin: "-180px", once: true }}
            >
              <Accordion>
                {questions.map((question, index) => (
                  <AccordionItem key={index} title={question.title}>
                    {question.question}
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </LayoutBox>
        </>
      </LayoutBox>
    </div>
  );
};
