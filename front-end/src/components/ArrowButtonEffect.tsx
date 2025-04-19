import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RIGHT_ARROW from "../assets/Right_arrow.svg";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const ArrowButtonEffect = ({
  children,
  to,
  onClick,
}: {
  children: string;
  to: string;
  onClick?: () => void;
}) => {
  const windowSize = useWindowWidth();

  return (
    <div
      className="cursor-pointer pr-2 -translate-x-8 sm:translate-x-4 sm:overflow-hidden"
      onClick={onClick}
      aria-label="button"
    >
      <motion.div
        whileHover={{ translateX: windowSize > 639 ? 15 : 0 }}
        className="flex"
      >
        <img
          src={RIGHT_ARROW}
          className="max-w-[15px] -translate-x-4 hidden sm:inline-block "
        />
        <Link to={to} className="font-bold sm:-translate-x-2 translate-x-10">
          {children}
        </Link>
      </motion.div>
    </div>
  );
};
