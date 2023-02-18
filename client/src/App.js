import "./App.css";
import { Route, Routes} from "react-router-dom";

import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Detail } from "./components/Detail";
import { BuildPc } from "./components/BuildPc";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";
import {Login} from "./components/Login"
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route path="/Products" element={<Products/>} />

        <Route path="/detail/:Name" element={<Detail/>} />

        <Route path="/BuildPc" element={<BuildPc/>} /> 

        <Route path="/Register" element={<Register/>} />

        <Route path="/Login" element={<Login/>} />

        <Route path="/CreateProduct" element={<CreateProduct/>} />


      <Route path="/Login" component={Login} />

      <Route path="/CreateProduct" component={CreateProduct} />


        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
