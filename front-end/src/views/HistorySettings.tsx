import { HistoryInfoDiv } from "../components/HistoryInfoDiv";

export const HistorySettings = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Historia</h2>
      <p className="mt-1 text-sm text-gray-500">Historia Twoich wizyt</p>
      <HistoryInfoDiv />
    </div>
  );
};
