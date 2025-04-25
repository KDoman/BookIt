import { Button } from "@heroui/react";
import { EntryInfoDiv } from "./EntryInfoDiv";
import STEP_0 from "../assets/step_0_intro.avif";
import STEP_1 from "../assets/step_1_booking.avif";
import STEP_2 from "../assets/step_2_cancel.avif";
import STEP_3 from "../assets/step_3_specialist.avif";

export const EntryInfoPage = () => {
  return (
    <>
      <div id="container" className=" flex flex-col gap-10 mt-10 p-4">
        <EntryInfoDiv h2="Rezerwuj wygodnie z Bookit!" imgUrl={STEP_0}>
          BookIt to intuicyjny portal, który pomoże Ci szybko i bezproblemowo
          znaleźć oraz zarezerwować potrzebną usługę. Wystarczy kilka kliknięć,
          aby umówić wizytę – bez zbędnych formalności i długiego czekania!
        </EntryInfoDiv>

        <EntryInfoDiv
          h2="Zarezerwuj w kilka sekund"
          imgUrl={STEP_1}
          left={true}
        >
          Wybierz dogodny termin, potwierdź rezerwację i ciesz się profesjonalną
          obsługą. BookIt sprawia, że rezerwowanie usług jest szybkie, proste i
          wygodne!
        </EntryInfoDiv>

        <EntryInfoDiv
          h2="Coś Ci wypadło? Nie szkodzi!"
          imgUrl={STEP_2}
          bgPosition="30%"
        >
          Życie bywa nieprzewidywalne, dlatego w BookIt możesz łatwo edytować
          lub anulować swoją rezerwację. Bez stresu i bez ukrytych opłat – pełna
          elastyczność dla Ciebie!
        </EntryInfoDiv>

        <EntryInfoDiv
          h2="Najlepsi specjaliści w Twojej okolicy"
          imgUrl={STEP_3}
          bgPosition="55%"
          left={true}
        >
          W BookIt znajdziesz sprawdzonych i doświadczonych specjalistów, którzy
          świadczą usługi na najwyższym poziomie. Wybierz najlepszego fachowca w
          swojej okolicy i ciesz się profesjonalną obsługą!
        </EntryInfoDiv>

        <div className="bg-[#222222] text-white flex flex-col rounded-lg">
          <EntryInfoDiv h2="Oferuj swoje usługi!">
            Dołącz do BookIt jako usługodawca i dotrzyj do tysięcy klientów
            szukających specjalistów takich jak Ty. Zarządzaj rezerwacjami,
            buduj swoją renomę i rozwijaj swój biznes w prosty sposób!
          </EntryInfoDiv>
          <Button color="primary" className="mb-4 mx-4 font-bold">
            Rozpocznij!
          </Button>
        </div>
      </div>
    </>
  );
};
