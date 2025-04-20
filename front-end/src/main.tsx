import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Layout } from "./views/Layout.tsx";
import { EntryPage } from "./views/EntryPage.tsx";
import { AboutUs } from "./views/AboutUs.tsx";
import { Contact } from "./views/Contact.tsx";
import { SearchResults } from "./views/SearchResults.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { CardModal } from "./components/CardModal.tsx";
import { Login } from "./views/Login.tsx";
import { Register } from "./views/Register.tsx";

import { Settings } from "./views/Settings.tsx";
import { AccountSettings } from "./views/AccountSettings.tsx";
import { HistorySettings } from "./views/HistorySettings.tsx";
import { VisitSettings } from "./views/VisitSettings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <EntryPage /> },
      {
        path: "o-nas",
        element: <AboutUs />,
      },
      { path: "contact", element: <Contact /> },
      {
        path: "/search/:service",
        element: <SearchResults />,
      },
      {
        path: "/search/:service/:idCard",
        element: <CardModal />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "account",
        element: <Settings />,
        children: [
          {
            path: "/account/settings",
            element: <AccountSettings />,
          },
          {
            path: "/account/history",
            element: <HistorySettings />,
          },
          {
            path: "/account/visits",
            element: <VisitSettings />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
