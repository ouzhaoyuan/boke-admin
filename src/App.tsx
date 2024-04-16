import "./App.scss";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import Router from "@/routers/index";

function App() {
  return (
    <HashRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Router></Router>
      </PersistGate>
    </HashRouter>
  );
}

export default App;
