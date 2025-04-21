import { Button, Divider } from "@heroui/react";
import { ChangePasswordInput } from "./ChangePasswordInput";

export const AccountSettingsChangePassword = () => {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-semibold pt-7">Zmień hasło</h2>
      <p className="mt-1 text-sm text-gray-500">
        Zmień hasło przypisane do Twojego konta.
      </p>
      <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"></div>
      <ChangePasswordInput label="Obecne hasło" />
      <ChangePasswordInput label="Nowe hasło" />
      <ChangePasswordInput label="Powtórz nowe hasło" />
      <Button className="mb-5">Zapisz</Button>
      <Divider />
    </div>
  );
};
