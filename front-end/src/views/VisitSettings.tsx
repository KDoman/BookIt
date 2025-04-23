import { VisitInfoDiv } from "../components/VisitInfoDiv";

export const VisitSettings = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Wizity</h2>
      <p className="mt-1 text-sm text-gray-500">Twoje przyszłe wizyty</p>
      <VisitInfoDiv />
    </div>
  );
};
