import '../styles/Detail.css';
import {React,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getProductDetail,getAllBrands,getAllTypes } from '../redux/actions/ProductActions';
import {Link, useParams} from 'react-router-dom'

export const Detail = () => {
    const {name}=useParams();
    const dispatch= useDispatch();

    useEffect(()=>{dispatch(getProductDetail(name))},[]);
    useEffect(()=>{dispatch(getAllBrands())},[]);
    useEffect(()=>{dispatch(getAllTypes())},[]);

    const detail= useSelector(state=>state.productDetail)
    const brand= useSelector((state)=>{return state.brands.find(b=>b.id===detail.brandId)})
    const type= useSelector(state=>state.types.find(t=>t.id===detail.typeId));

    
    return(
        <div className="DetailContainer">
            <h1>{name}</h1>
            <Link to ='/'><button>Volver</button></Link>
            <img src={detail.image}/>
            <p>{detail.description}</p>
            <h2>{detail.price}</h2>
            <h2>{brand.name}</h2> 
            <h2>{type.name}</h2> 
        </div>     
    )
}