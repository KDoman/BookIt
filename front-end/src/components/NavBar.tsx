import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
} from "@heroui/react";
import { useState } from "react";
import { NavHambOpenedMenu } from "./NavHambOpenedMenu";
import { NavHambIcon } from "./NavHambIcon";
import { Link } from "react-router-dom";
import RIGHT_ARROW from "../assets/Right_arrow.svg";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { NavText } from "./NavText";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/">
            <NavText>Strona główna</NavText>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" to="/">
            <NavText>O nas</NavText>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/">
            <NavText>Kontakt</NavText>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="cursor-pointer relative w-32 overflow-hidden">
          <motion.div whileHover={{ translateX: 15 }} className=" flex">
            <img
              src={RIGHT_ARROW}
              className="max-w-[15px] -translate-x-4 hidden sm:inline-block "
            />
            <p className="font-bold sm:-translate-x-2 translate-x-10">
              Zaloguj się
            </p>
          </motion.div>
        </div>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        icon={<NavHambIcon isMenuOpen={isMenuOpen} />}
      />
      <NavHambOpenedMenu />
    </Navbar>
  );
}
