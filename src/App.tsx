import './App.scss';
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";

function App() {
  return (
   <HashRouter>
    <Router></Router>
   </HashRouter>
  );
}

export default App;
