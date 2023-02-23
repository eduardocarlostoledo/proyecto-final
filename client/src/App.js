import "./App.css";
import { Route, Routes} from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Detail } from "./components/Detail";
import { BuildPc } from "./components/BuildPc";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import Profile  from "./components/Profile";
import {Login} from "./components/Login"
import {CreateProducts} from "./components/CreateProduct";
<<<<<<< HEAD
import {Cart} from "./components/Cart";
import { GetFiltersForEmail } from "./redux/actions/UsersActions";
import { useEffect } from "react";

=======
import Cart from "./components/Cart";
>>>>>>> origin/develop

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route path="/Products" element={<Products/>} />

        <Route path="/detail/:Name" element={<Detail/>} />

        <Route path="/BuildPc" element={<BuildPc/>} /> 

        <Route path="/Register" element={<Register/>} />

        <Route path="/Login" element={<Login/>} />

        <Route path="/CreateProduct" element={<CreateProducts/>} />

<<<<<<< HEAD
        <Route path="/Login" component={Login} />

        <Route path="/CreateProduct" component={CreateProducts} />

        <Route path="/Profile" element={<Profile/>} />

        <Route path="/Cart" element={<Cart/>} />
=======
        <Route path="/Profile" element={<Profile/>} />

        <Route path="/Cart" element={<Cart/>} />

>>>>>>> origin/develop
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;