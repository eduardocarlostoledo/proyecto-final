import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Detail } from "./components/Detail";
import { BuildPc } from "./components/BuildPc";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";
import CreateProduct from "./components/CreateProduct";
import { Login } from "./components/Login";
axios.defaults.baseURL='http://localhost:3001/';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />

      <Route path="/Products" component={Products} />

      <Route path="/detail/:Name" component={Detail} />

      <Route path="/BuildPc" component={BuildPc} /> 

      <Route path="/Register" component={Register} />

      <Route path="/Login" component={Login} />

      <Route path="/CreateProduct" component={CreateProduct} />

      <Route path="/Profile" component={Profile} />
    </div>
  );
}

export default App;
