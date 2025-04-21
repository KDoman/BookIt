import { Button } from "@heroui/react";
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
