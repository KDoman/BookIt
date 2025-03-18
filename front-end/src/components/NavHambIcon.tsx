import { AnimatePresence, motion } from "framer-motion";

export const NavHambIcon = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuOpen ? (
        <motion.svg
          key="close-icon"
          width="25"
          height="25"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transition={{ duration: 0.2 }}
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            d="M0.646446 45.6464L45.6464 0.646447"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            d="M1.35355 0.646446L46.3536 45.6464"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </motion.svg>
      ) : (
        <motion.svg
          key="menu-icon"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transition={{ duration: 0.2 }}
          initial={{ scale: 1.3 }}
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            d="M2 12.32H22"
            stroke="#000000"
            strokeWidth="1"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            d="M2 18.32H22"
            stroke="#000000"
            strokeWidth="1"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            d="M2 6.32001H22"
            stroke="#000000"
            strokeWidth="1"
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
};
