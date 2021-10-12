import React from "react";
import styles from "../styles/FAQ.module.css";
import FaqOneElement from "./elements/FaqOneElements";

export default function FAQ() {
  const questions = [
    {
      title: "Ile czasu zajmuje odpowiedź od lekarza?",
      description:
        "Powinieneś otrzymać odpowiedzi od lekarza na platformie Medex w ciągu kilku minut od wysłania zapytania. Jeśli Twoja prośba została wysłana w godzinach nocnych, czas odpowiedzi może wydłużyć się do kilku godzin oczekiwania.",
    },
    {
      title: "Dla kogo jest Medex?",
      description:
        "Medex to cyfrowy serwis swiądczący usługi opieki zdrowotnej, który zapewnia osobom dorosłym (18+) telemedycynę i telefrmację w celu szybkiego i skutecznego leczenia ich problemów zdrowotnych w dowolnym czasie i miejscu.",
    },
    {
      title: "Kim są pracownicy służby zdrowia w Medex?",
      description:
        "Cały zespół opieki zdrowotnej na platformie Medex to licencjonowani pracownicy służby zdrowia. Każdy lekarz przechodzi proces sprawdzania i weryfikacji licencji oraz wiedzy. Kiedy wysyłasz wiadomość lub rozmawiasz z lekarzem na platformie Medex, możesz zobaczyć jego CV i licencję medyczną.",
    },
    {
      title: "Czy mogę korzystać z dowolnej apteki?",
      description:
        "Tak, możesz w prosty sposób wybrać adres swojej lokalnej apteki, a leki zostaną tam dostarczone za darmo.",
    },
    {
      title: "Czy moje dane osobowe są bezpieczne?",
      description:
        "Tak. Bardzo poważnie traktujemy Twoją prywatność i bezpieczeństwo Twoich danych osobowych. Przeczytaj naszą Politykę prywatności, aby uzyskać więcej informacji.",
    },
  ];

  return (
    <div className={styles.globalFaq} id="faq">
      <h2>Najczęściej zadawane pytania</h2>
      <div className={styles.faqArray}>
        {questions.map((e) => (
          <FaqOneElement
            title={e.title}
            description={e.description}
            key={e.title}
          />
        ))}
      </div>
    </div>
  );
}
