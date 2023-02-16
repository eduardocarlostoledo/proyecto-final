import { Search } from "./Search";
import Card from './Card'
import '../styles/Home.css';
import { useEffect } from "react";
import {useDispatch,useSelector } from "react-redux";
import {getAllProducts } from "../redux/actions/ProductActions";

export const Home = () => {
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(getAllProducts())});
    const products=useSelector(state=>state.products)
    return(
        <div className="HomeContainer">
            <h1>Home</h1>
            {products?.map(p=> (
                <Card
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                />))}
        </div>
    )
}