import { motion } from "framer-motion";

export const NavText = ({ children }: { children: string }) => {
  return (
    <div className="relative overflow-hidden max-h-10 ">
      <motion.div className=" p-0.5" whileHover={{ translateY: -23 }}>
        <p>{children}</p>
        <p className="absolute">{children}</p>
      </motion.div>
    </div>
  );
};
