import { LayoutBox } from "./LayoutBox";
import { motion } from "framer-motion";

export const AboutUsWhyUsSection = () => {
  const reasons: string[] = [
    "Intuicyjność",
    "Elastyczność",
    "Jakość",
    "Wsparcie",
  ];

  return (
    <LayoutBox>
      <div className="px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-200px", once: true }}
        >
          <h2 className="text-5xl font-bold uppercase text-right">
            Dlaczego warto nam ufać?
          </h2>
          {reasons.map((reason, index) => (
            <div className="flex items-center gap-4 mt-10" key={index}>
              <motion.svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M18 22.02L24 28.02L44 8"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.4 + 1,
                  }}
                />
                <motion.path
                  d="M44 22.16V24C43.9975 28.3128 42.601 32.5093 40.0187 35.9636C37.4363 39.4179 33.8066 41.945 29.6707 43.1678C25.5349 44.3906 21.1145 44.2438 17.0689 42.7492C13.0234 41.2545 9.56931 38.4922 7.22192 34.8741C4.87453 31.2561 3.75958 26.9761 4.04335 22.6726C4.32712 18.3691 5.99441 14.2726 8.79656 10.9941C11.5987 7.71563 15.3856 5.43076 19.5924 4.48029C23.7992 3.52982 28.2005 3.96467 32.14 5.72"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.4 + 1,
                  }}
                />
              </motion.svg>
              <motion.p
                className="font-bold text-lg"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.4 + 1.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                {reason}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </LayoutBox>
  );
};
