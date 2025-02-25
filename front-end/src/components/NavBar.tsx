import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Button,
  NavbarItem,
} from "@heroui/react";
import { useState } from "react";
import { NavHambOpenedMenu } from "./NavHambOpenedMenu";
import { NavHambIcon } from "./NavHambIcon";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-blue-50">
      <NavbarContent>
        <NavbarBrand>
          <p className="text-inherit text-3xl">BookIt</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" to="/">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button color="primary" href="#" variant="flat" className="font]">
          Sign Up
        </Button>
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
