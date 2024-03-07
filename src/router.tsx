import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./App";
import LandingPage from "./pages/LandingPage";
import AllChanels from "./pages/AllChannels";
import Program from "./pages/Program";
import ChannelDetails from "./pages/ChannelDetails";
import ProgramDetails from "./pages/ProgramDetails";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<LandingPage />} index />
      <Route element={<Program/>} path="program"/>
      <Route element={<AllChanels/>} path="channel"/>
      <Route element={<ChannelDetails/>} path="channel/details/:id"/>
      <Route element={<ProgramDetails/>} path="program/details/:id" />
     
    </Route>
  )
);