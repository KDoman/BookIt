import { Avatar, Button } from "@heroui/react";
import { AccountSettingsInfoDiv } from "../components/AccountSettingsInfoDiv";
import { AccountSettingsChangePassword } from "../components/AccountSettingsChangePassword";

export const AccountSettings = () => {
  const settings = [
    { label: "Imię i nazwisko", value: "Tom Cook" },
    { label: "Adres email", value: "tom.cook@example.com" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Konto</h2>
      <p className="mt-1 text-sm text-gray-500">Edytuj swoje informacje</p>
      <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium text-gray-900">Avatar</p>
            <Avatar size="lg" className="mt-2" />
          </div>
          <div>
            <button className="text-sm font-medium text-black transition-colors hover:text-white hover:bg-black p-2 rounded-md ">
              Edytuj
            </button>
          </div>
        </div>
        {settings.map((item, idx) => (
          <AccountSettingsInfoDiv item={item} i={idx} />
        ))}
      </div>
      <AccountSettingsChangePassword />
      <Button color="danger" className="mb-5">
        Usuń konto
      </Button>
    </div>
  );
};
