import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ApplicationsRoutes from "./components/ApplicationsRoutes";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ApplicationsRoutes />
  </StrictMode>,

  rootElement
);
