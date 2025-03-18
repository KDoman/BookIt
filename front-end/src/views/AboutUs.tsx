import { AboutUsEntry } from "../components/AboutUsEntry";
import { AboutUsOurMission } from "../components/AboutUsOurMission";
import { AboutUsDescription } from "../components/AboutUsDescription";
import { AboutUsWhyUsSection } from "../components/AboutUsWhyUsSection";
import { AboutUsVision } from "../components/AboutUsVision";

export const AboutUs = () => {
  return (
    <>
      <AboutUsEntry />
      <AboutUsDescription />
      <AboutUsOurMission />
      <AboutUsWhyUsSection />
      <AboutUsVision />
    </>
  );
};
