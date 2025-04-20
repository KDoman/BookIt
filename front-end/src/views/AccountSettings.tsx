import { Button } from "@heroui/react";

export const AccountSettings = () => {
  const settings = [
    { label: "Imię i nazwisko", value: "Tom Cook" },
    { label: "Adres email", value: "tom.cook@example.com" },
    { label: "Title", value: "Human Resources Manager" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Konto</h2>
      <p className="mt-1 text-sm text-gray-500">Edytuj swoje informacje</p>
      <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
        {settings.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
            <div>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Edytuj
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold pt-7">Zmień hasło</h2>
        <p className="mt-1 text-sm text-gray-500">
          Zmień hasło przypisane do Twojego konta.
        </p>
        <div className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"></div>
        <div className="mt-4">
          <label
            htmlFor="login"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Login
          </label>
          <div className="mt-2">
            <input
              id="login"
              name="login"
              type="text"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <Button color="danger">Usuń konto</Button>
    </div>
  );
};
