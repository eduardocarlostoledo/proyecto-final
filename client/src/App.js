import "./App.css";
import { Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Detail } from "./components/Detail";
import { BuildPc } from "./components/BuildPc";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Route exact path="/" component={Home} />

      <Route exact path="/Products" component={Products} />
      <Route exact path="/Detail" component={Detail} />
      <Route exact path="/BuildPc" component={BuildPc} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Profile" component={Profile} />
    </div>
  );
}

export default App;
