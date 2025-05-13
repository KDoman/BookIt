import { LayoutBox } from "../components/LayoutBox";
import CALL_US_SVG from "../assets/call_us.svg";
import CHAT_SVG from "../assets/Chat.svg";
import CUSTOMER_SERVICE from "../assets/customer_service.svg";
import { motion } from "framer-motion";
import { ReactElement } from "react";

const InfoCard = ({
  children,
  img,
  title,
  description,
  delay,
}: {
  children: ReactElement;
  img: string;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="bg-white text-[#222] mx-3 p-3 font-medium rounded-lg min-h-48 flex flex-col justify-between"
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay }}
      viewport={{ margin: "-200px", once: true }}
    >
      <div className="max-w-12 bg-[#222] p-1 rounded-">
        <img src={img} />
      </div>
      <div className="min-h-24 flex flex-col justify-between">
        <p className=" text-lg font-bold">{title}</p>
        <p className="text-sm">{description}</p>
        <p className="underline underline-offset-4">{children}</p>
      </div>
    </motion.div>
  );
};

export const ContactInfo = () => {
  return (
    <div className="bg-[#222] text-white ">
      <LayoutBox>
        <>
          <motion.h2
            className="text-4xl  uppercase font-bold text-right mr-3 sm:text-5xl py-8 sm:mr-5"
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "-300px", once: true }}
          >
            Skontaktuj się z nami!
          </motion.h2>
          <div className="flex flex-col gap-8 pb-10 md:flex-row">
            <LayoutBox className="flex-1">
              <>
                <InfoCard
                  img={CALL_US_SVG}
                  title="Kontakt"
                  description="Skontaktuj się z nami telefonicznie."
                  delay={0.4}
                >
                  <a href="tel:+48111222333">+48 111-222-333</a>
                </InfoCard>
              </>
            </LayoutBox>
            <LayoutBox className="flex-1">
              <InfoCard
                img={CHAT_SVG}
                title="Wsparcie"
                description="Skontaktuj się z naszym działem wsparcia."
                delay={0.3}
              >
                <a href="mailto:itdoman1999@gmail.com">itdoman1999@gmail.com</a>
              </InfoCard>
            </LayoutBox>
            <LayoutBox className="flex-1">
              <InfoCard
                img={CUSTOMER_SERVICE}
                title="Obsługa klienta"
                description="Potrzebujesz informacji? Jesteśmy dostępni!"
                delay={0.2}
              >
                <a href="mailto:itdoman1999@gmail.com">itdoman1999@gmail.com</a>
              </InfoCard>
            </LayoutBox>
          </div>
        </>
      </LayoutBox>
    </div>
  );
};
