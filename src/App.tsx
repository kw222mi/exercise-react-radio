import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { IRoute } from "./interfaces";
import  LandingPage  from "./pages/LandingPage";

export function App() {
  const links: IRoute[] = [
    {
      id: 1,
      name: "Landing page",
      path: "/",
    },
    {
      id: 2,
      name: "Search Page",
      path: "/search",
    },
  ];

  return (
    <>
      <Header links={links} />
      <Outlet />
    </>
  );
}



/*

hämta alla kanaler:
http://api.sr.se/api/v2/channels?format=json



*/