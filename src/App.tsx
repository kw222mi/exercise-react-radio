import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { IRoute } from "./interfaces";


export function App() {
  const links: IRoute[] = [
    {
      id: 1,
      name: "Hem",
      path: "/",
    },
    {
      id: 2,
      name: "Program",
      path: "/program",
    },
    {
      id: 3,
      name: "Kanaler",
      path: "/channel",
    },
   
  ];

  return (
    <>
      <Header links={links} />
      <Outlet />
    </>
  );
}

