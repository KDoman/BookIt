import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./views/Layout.tsx";
import { EntryPage } from "./views/EntryPage.tsx";
import { AboutUs } from "./views/AboutUs.tsx";
import { Contact } from "./views/Contact.tsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
