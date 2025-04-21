export const ChangePasswordInput = ({ label }: { label: string }) => {
  return (
    <div className="mt-4">
      <label
        htmlFor="change_password"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id="change_password"
          name="change_password"
          type="password"
          required
          className="mb-5 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
        />
      </div>
    </div>
  );
};
