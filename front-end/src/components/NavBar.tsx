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
import { Logo } from "./Logo";
import { NavText } from "./NavText";
import { NavBarUserIsNotLoggedIn } from "./NavBarUserIsNotLoggedIn";
import { NavBarUserIsLoggedIn } from "./NavBarUserIsLoggedIn";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isUserLoggedIn = useState<boolean>(true);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-white"
    >
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
          <Link aria-current="page" to="o-nas">
            <NavText>O nas</NavText>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="contact">
            <NavText>Kontakt</NavText>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {isUserLoggedIn ? <NavBarUserIsLoggedIn /> : <NavBarUserIsNotLoggedIn />}

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        icon={<NavHambIcon isMenuOpen={isMenuOpen} />}
      />
      <NavHambOpenedMenu setIsMenuOpen={setIsMenuOpen} />
    </Navbar>
  );
};
