import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Detail } from "./components/Detail";
import { BuildPc } from "./components/BuildPc";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import Profile from "./components/Profile";
import { Login } from "./components/Login"
import { CreateProducts } from "./components/CreateProduct";
import { GetFiltersForEmail } from "./redux/actions/UsersActions";
import { useEffect } from "react";
import { PanelAdmin } from "./components/PanelAdmin";
import { AdminProducts } from "./components/AdminProducts";
import { Test } from "./components/Test";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GetFiltersForEmail())
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/Products" element={<Products />} />

        <Route path="/detail/:Name" element={<Detail />} />

        <Route path="/BuildPc" element={<BuildPc />} />

        <Route path="/Register" element={<Register />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/CreateProduct" element={<CreateProducts />} />

        <Route path="/CreateProduct" component={CreateProducts} />

        <Route path="/Profile" element={<Profile />} />

        <Route path="/Admin" element={<PanelAdmin />} />

        <Route path="/Admin/Products" element={<AdminProducts />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
