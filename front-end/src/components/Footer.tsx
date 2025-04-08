import BOOKIT_LOGO from "../assets/WhiteLogo.svg";

export const Footer = () => {
  return (
    <div className="w-full bg-[#222] text-white py-4 flex justify-center items-center  flex-col gap-5">
      <img src={BOOKIT_LOGO} className="max-w-20 " />
      <p>Autor: Kacper Domański &copy;</p>
    </div>
  );
};
