import { NavbarMenu } from "@heroui/react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const NavHambOpenedMenu = () => {
  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System"];
  return (
    <AnimatePresence mode="wait">
      <NavbarMenu
        className="bg-blue-100 overflow-hidden h-fit "
        motionProps={{
          variants: {
            exit: {
              width: 0,
              opacity: 0,
              transition: {
                duration: 0.2,
                delay: 0.5,
                ease: "easeInOut",
              },
            },
            enter: {
              opacity: 1,
              width: "100%",
              transition: {
                duration: 0.15,
                ease: "easeInOut",
              },
            },
          },
        }}
      >
        {menuItems.map((item, index) => (
          <motion.li
            className="py-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ delay: index - 0.9 * index, duration: 0.2 }}
          >
            <Link to="/" className="w-full">
              {item}
            </Link>
          </motion.li>
        ))}
      </NavbarMenu>
    </AnimatePresence>
  );
};
