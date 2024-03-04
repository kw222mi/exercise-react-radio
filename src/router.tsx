import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./App";
import LandingPage from "./pages/LandingPage";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<LandingPage />} index />
     
    </Route>
  )
);