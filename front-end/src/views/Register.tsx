import FULL_LOGO from "../assets/FullLogo.png";
import { ArrowButtonEffect } from "../components/ArrowButtonEffect";
import GOOGLE from "../assets/Google.svg";

export const Register = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="BookIt Logo"
            src={FULL_LOGO}
            className="mx-auto h-20 w-auto"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Hasło
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#222] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
              >
                Zarejestruj się
              </button>
            </div>
            <div className="relative w-full border-1 border-black">
              <div className="absolute text-sm left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-4">
                Lub kontynuuj
              </div>
            </div>
            <div className="outline-gray-300 outline outline-1 rounded-lg flex items-center justify-center gap-2 hover:outline-black cursor-pointer ">
              <img src={GOOGLE} alt="Google logo" className="max-w-8 p-1.5" />
              <p>Google</p>
            </div>
          </form>
          <div className="mt-4 flex justify-between items-center ">
            <p className=" text-center inline-block  text-sm/6 text-gray-500">
              Masz już konto?{" "}
            </p>
            <ArrowButtonEffect to="/login">Zaloguj się</ArrowButtonEffect>
          </div>
        </div>
      </div>
    </>
  );
};
