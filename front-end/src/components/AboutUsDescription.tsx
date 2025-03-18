import { Divider } from "@heroui/react";
import { LayoutBox } from "./LayoutBox";

export const AboutUsDescription = () => {
  return (
    <LayoutBox>
      <div className="text-lg font-bold flex flex-col gap-16 my-10 px-4 lg:p-0">
        <p className="block ">
          Wierzymy, że rezerwowanie usług powinno być szybkie, proste i wygodne.
        </p>
        <Divider />
        <p className="block text-right">
          Stworzyliśmy BookIt – platformę, która łączy użytkowników z
          najlepszymi specjalistami w różnych branżach.
        </p>
        <Divider />
        <p>
          Bez zbędnych formalności, długiego oczekiwania i ukrytych kosztów.
        </p>
      </div>
    </LayoutBox>
  );
};
