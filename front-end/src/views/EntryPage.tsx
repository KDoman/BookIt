import { EntryInfoPage } from "../components/EntryInfoPage";
import { LayoutBox } from "../components/LayoutBox";
import { TextBookIt } from "../components/TextBookIt";

export const EntryPage = () => {
  return (
    <>
      <TextBookIt />
      <LayoutBox>
        <EntryInfoPage />
      </LayoutBox>
    </>
  );
};
