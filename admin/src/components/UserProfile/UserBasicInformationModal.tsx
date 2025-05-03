import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { FakeAccount } from "../../pages/UserProfile";
import { Dispatch, SetStateAction } from "react";
import { UserBasicInformationFileInput } from "./UserBasicInformationFileInput";

export const UserBasicInformationModal = ({
  isOpen,
  closeModal,
  handleSave,
  setFakeAccount,
  fakeAccount,
}: {
  isOpen: boolean;
  closeModal: () => void;
  handleSave: () => void;
  setFakeAccount: Dispatch<SetStateAction<FakeAccount>>;
  fakeAccount: FakeAccount;
}) => {
  const updateAccountData = (
    property: keyof FakeAccount | keyof FakeAccount["companySocialLinks"],
    value: string
  ) => {
    if (
      property === "instagram" ||
      property === "facebook" ||
      property === "x" ||
      property === "linkedin"
    ) {
      setFakeAccount({
        ...fakeAccount,
        companySocialLinks: {
          ...fakeAccount.companySocialLinks,
          [property]: value,
        },
      });
    } else {
      setFakeAccount({
        ...fakeAccount,
        [property as keyof FakeAccount]: value,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edytuj podstawowe informacje
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                Podstawowe informacje
              </h5>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <UserBasicInformationFileInput />
                <div className="col-span-2 lg:col-span-1">
                  <Label>Nazwa firmy</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("companyName", e.target.value)
                    }
                    defaultValue={fakeAccount.companyName}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label>Adres email</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("addressEmail", e.target.value)
                    }
                    defaultValue={fakeAccount.addressEmail}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label>Strona internetowa</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("companyWebsite", e.target.value)
                    }
                    defaultValue={fakeAccount.companyWebsite}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label>Telefon</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("companyPhone", e.target.value)
                    }
                    defaultValue={fakeAccount.companyPhone}
                  />
                </div>
              </div>
            </div>
            <div>
              <h5 className="mt-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                Portale społecznościowe
              </h5>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Facebook</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("facebook", e.target.value)
                    }
                    defaultValue={fakeAccount.companySocialLinks.facebook}
                  />
                </div>

                <div>
                  <Label>X</Label>
                  <Input
                    type="text"
                    onChange={(e) => updateAccountData("x", e.target.value)}
                    defaultValue={fakeAccount.companySocialLinks.x}
                  />
                </div>

                <div>
                  <Label>Linkedin</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("linkedin", e.target.value)
                    }
                    defaultValue={fakeAccount.companySocialLinks.linkedin}
                  />
                </div>

                <div>
                  <Label>Instagram</Label>
                  <Input
                    type="text"
                    onChange={(e) =>
                      updateAccountData("instagram", e.target.value)
                    }
                    defaultValue={fakeAccount.companySocialLinks.instagram}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Zamknij
            </Button>
            <Button size="sm" onClick={handleSave}>
              Zapisz
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
