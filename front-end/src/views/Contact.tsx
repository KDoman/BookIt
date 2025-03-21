import { ContactQuestions } from "../components/ContactQuestions";
import { ContactEntry } from "../components/ContactEntry";
import { ContactInfo } from "../components/ContactInfo";

export const Contact = () => {
  return (
    <>
      <ContactEntry />
      <ContactInfo />
      <ContactQuestions />
    </>
  );
};
