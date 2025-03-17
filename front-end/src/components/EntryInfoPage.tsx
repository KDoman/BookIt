import { Button } from "@heroui/react";

export const EntryInfoPage = () => {
  return (
    <>
      <div id="container" className=" flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-3 p-4">
          <h2 className="text-3xl">Rezerwuj wygodnie z BookIt!</h2>
          <p>
            BookIt to intuicyjny portal, który pomoże Ci szybko i bezproblemowo
            znaleźć oraz zarezerwować potrzebną usługę. Wystarczy kilka
            kliknięć, aby umówić wizytę – bez zbędnych formalności i długiego
            czekania!
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <h2 className="text-3xl">Zarezerwuj w kilka sekund</h2>
          <p>
            Wybierz dogodny termin, potwierdź rezerwację i ciesz się
            profesjonalną obsługą. BookIt sprawia, że rezerwowanie usług jest
            szybkie, proste i wygodne!
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <h2 className="text-3xl">Coś Ci wypadło? Nie szkodzi!</h2>
          <p>
            Życie bywa nieprzewidywalne, dlatego w BookIt możesz łatwo edytować
            lub anulować swoją rezerwację. Bez stresu i bez ukrytych opłat –
            pełna elastyczność dla Ciebie!
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <h2 className="text-3xl">Najlepsi specjaliści w Twojej okolicy</h2>
          <p>
            W BookIt znajdziesz sprawdzonych i doświadczonych specjalistów,
            którzy świadczą usługi na najwyższym poziomie. Wybierz najlepszego
            fachowca w swojej okolicy i ciesz się profesjonalną obsługą!
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-[#e4e4e7] p-4">
          <h2 className="text-3xl">Oferuj swoje usługi!</h2>
          <p>
            Dołącz do BookIt jako usługodawca i dotrzyj do tysięcy klientów
            szukających specjalistów takich jak Ty. Zarządzaj rezerwacjami,
            buduj swoją renomę i rozwijaj swój biznes w prosty sposób!
          </p>
          <Button color="default">Rozpocznij!</Button>
        </div>
      </div>
    </>
  );
};
