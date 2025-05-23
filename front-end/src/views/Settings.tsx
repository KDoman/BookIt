import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutBox } from "../components/LayoutBox";

const tabs = [
  { name: "Konto", path: "/account/settings" },
  { name: "Historia", path: "/account/history" },
  { name: "Wizyty", path: "/account/visits" },
];

export const Settings = () => {
  const location = useLocation();

  return (
    <LayoutBox>
      <div className="px-6 lg:p-0">
        <div className="h-12 border-t-1 border-b-1 mb-5 border-gray-300 flex items-center gap-4">
          {tabs.map((tab) => {
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`${
                  location.pathname === tab.path ? "font-semibold" : ""
                } cursor-pointer py-0.5`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
        <Outlet />
      </div>
    </LayoutBox>
  );
};
