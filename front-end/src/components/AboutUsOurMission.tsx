import { motion } from "framer-motion";
import { LayoutBox } from "./LayoutBox";
export const AboutUsOurMission = () => {
  return (
    <div className="px-4 bg-[#222] py-10 text-white relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-200px", once: true }}
      >
        <LayoutBox>
          <div className="md:flex md: justify-between items-end md:h-[250px]">
            <h2 className="text-5xl font-bold uppercase flex flex-col gap-2 justify-start h-full">
              <span>Nasza</span>
              <span>Misja</span>
            </h2>
            <p className="px-1 mt-5 md:max-w-[60ch] text-right">
              Chcemy ułatwiać życie zarówno klientom, jak i usługodawcom. Dajemy
              użytkownikom możliwość wygodnego umawiania wizyt, a specjalistom –
              narzędzie do efektywnego zarządzania rezerwacjami i rozwijania
              swojej działalności.
            </p>
          </div>
        </LayoutBox>
      </motion.div>
    </div>
  );
};
