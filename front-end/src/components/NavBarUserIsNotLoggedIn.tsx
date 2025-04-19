import { NavbarContent } from "@heroui/react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { ArrowButtonEffect } from "./ArrowButtonEffect";
import { useNavigate } from "react-router-dom";

export const NavBarUserIsNotLoggedIn = () => {
  const windowSize = useWindowWidth();
  const navigate = useNavigate();
  return (
    <>
      {windowSize > 639 ? (
        <NavbarContent justify="end">
          <ArrowButtonEffect
            to="/login"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Zaloguj się
          </ArrowButtonEffect>
        </NavbarContent>
      ) : (
        <button onClick={() => navigate("/login")} className="font-bold ">
          Zaloguj się
        </button>
      )}
    </>
  );
};
