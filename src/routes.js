import React from "react";
import Home from "./pages/home";
import General from "./pages/general";
import Auth from "./pages/auth";
import Faq from "./pages/faq";
import Team from "./pages/team";
import Terms from "./pages/terms";

const routes = [
  { path: "/", element: <Home /> },

  { path: "/general", element: <General /> },

  { path: "/login", element: <Auth /> },

  { path: "/faq", element: <Faq /> },

  { path: "/team", element: <Team /> },

  { path: "/terms", element: <Terms /> },
];

export default routes;
