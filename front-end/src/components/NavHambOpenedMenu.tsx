import { NavbarMenu } from "@heroui/react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const NavHambOpenedMenu = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (arg0: boolean) => void;
}) => {
  const menuItems = [
    { title: "Strona główna", path: "/" },
    { title: "O nas", path: "o-nas" },
    { title: "Kontakt", path: "contact" },
  ];

  return (
    <AnimatePresence mode="wait">
      <NavbarMenu
        className="overflow-hidden h-fit bg-zinc-100 py-2"
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
            key={index}
            className="py-4 bg-zinc-100 border-b-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ delay: index - 0.9 * index, duration: 0.2 }}
          >
            <Link
              to={item.path}
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </motion.li>
        ))}
      </NavbarMenu>
    </AnimatePresence>
  );
};
