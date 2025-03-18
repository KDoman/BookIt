import { LayoutBox } from "./LayoutBox";
import { motion } from "framer-motion";

export const AboutUsVision = () => {
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
              <span>Wizja</span>
            </h2>
            <p className="px-1 mt-5 md:max-w-[60ch] text-right">
              Nieustannie rozwijamy BookIt, dodając nowych specjalistów i
              udoskonalając system rezerwacji. Wkrótce planujemy wprowadzić
              jeszcze więcej funkcji, które uczynią umawianie wizyt jeszcze
              łatwiejszym! Pracujemy także nad aplikacją mobilną, dzięki której
              rezerwacja usług będzie jeszcze szybsza i bardziej intuicyjna –
              zawsze pod ręką, w Twoim smartfonie.
            </p>
          </div>
        </LayoutBox>
      </motion.div>
    </div>
  );
};
