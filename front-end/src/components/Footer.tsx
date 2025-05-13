import BOOKIT_LOGO from "../assets/WhiteLogo.svg";
import LINKEDIN_LOGO from "../assets/linkedin_white.svg";
import GITHUB_LOGO from "../assets/github_white.svg";

export const Footer = () => {
  return (
    <div className="w-full bg-[#222] text-white py-2 flex justify-center items-center  flex-col gap-1">
      <img src={BOOKIT_LOGO} className="max-w-20 " />
      <div className="flex items-center gap-1">
        <a href="https://www.linkedin.com/in/kacper-domanskii/" target="_blank">
          <img src={LINKEDIN_LOGO} className="max-w-5" />
        </a>
        <a href="https://github.com/KDoman" target="_blank">
          <img src={GITHUB_LOGO} className="max-w-4" />
        </a>
      </div>
      <p>Autor: Kacper Domański &copy; </p>
    </div>
  );
};
