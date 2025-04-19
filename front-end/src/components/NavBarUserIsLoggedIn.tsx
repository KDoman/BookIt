import { Avatar, NavbarContent } from "@heroui/react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";

export const NavBarUserIsLoggedIn = () => {
  const windowSize = useWindowWidth();
  const navigate = useNavigate();
  return (
    <>
      {windowSize > 639 ? (
        <NavbarContent justify="end">
          <Avatar
            size="sm"
            onClick={() => navigate("/account")}
            className="cursor-pointer"
          />
        </NavbarContent>
      ) : (
        <Avatar
          size="sm"
          className="cursor-pointer"
          onClick={() => navigate("/account")}
        />
      )}
    </>
  );
};
