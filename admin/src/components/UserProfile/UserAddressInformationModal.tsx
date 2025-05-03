import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { FakeAccount } from "../../pages/UserProfile";
import { Dispatch, SetStateAction } from "react";

export const UserAddressInformationModal = ({
  isOpen,
  closeModal,
  handleSave,
  fakeAccount,
  setFakeAccount,
}: {
  isOpen: boolean;
  closeModal: () => void;
  handleSave: () => void;
  fakeAccount: FakeAccount;
  setFakeAccount: Dispatch<SetStateAction<FakeAccount>>;
}) => {
  const updateAccountData = (
    property: keyof FakeAccount["companyAddress"],
    value: string | number
  ) => {
    setFakeAccount({
      ...fakeAccount,
      companyAddress: {
        ...fakeAccount.companyAddress,
        [property]: value,
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edytuj adres
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="px-2 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 p-1">
              <div>
                <Label>Kraj</Label>
                <Input
                  type="text"
                  defaultValue={fakeAccount.companyAddress.country}
                  onChange={(e) => updateAccountData("country", e.target.value)}
                />
              </div>

              <div>
                <Label>Miasto</Label>
                <Input
                  type="text"
                  defaultValue={fakeAccount.companyAddress.city}
                  onChange={(e) => updateAccountData("city", e.target.value)}
                />
              </div>

              <div>
                <Label>Kod pocztowy</Label>
                <Input
                  type="text"
                  defaultValue={fakeAccount.companyAddress.zipCode}
                  onChange={(e) => updateAccountData("zipCode", e.target.value)}
                />
              </div>

              <div>
                <Label>Ulica</Label>
                <Input
                  type="text"
                  defaultValue={fakeAccount.companyAddress.street}
                  onChange={(e) => updateAccountData("street", e.target.value)}
                />
              </div>
              <div>
                <Label>Number ulicy</Label>
                <Input
                  type="number"
                  value={fakeAccount.companyAddress.streetNumber}
                  onChange={(e) =>
                    updateAccountData("streetNumber", e.target.value)
                  }
                />
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
