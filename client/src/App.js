import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Detail } from "./components/Detail";
import { BuildPc } from "./components/BuildPc";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login"
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home} />

      <Route path="/Products" component={Products} />

      <Route path="/Detail" component={Detail} />

      <Route path="/BuildPc" component={BuildPc} /> 

      <Route path="/Login" component={Login} />

      <Route path="/Register" component={Register} />

      <Route path="/CreateProduct" component={CreateProduct} />

      <Route path="/Profile" component={Profile} />
    </div>
  );
}

export default App;
