import "../styles/Detail.css";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../redux/actions/ProductActions";
import { Link, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import { getCart } from "../redux/actions/CartActions";
import Review from "./Review";
import StarsCalification from "./StarsCalification";

export const Detail = () => {
  const { Name } = useParams();
  const [updateReviews, setUpdateReviews] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const detail = useSelector((state) => state.productDetail);
  const userActive=localStorage.getItem("USUARIO")!==null
              ?JSON.parse(localStorage.getItem("USUARIO"))
              :null
  const product=cart.find(p=>p.name===Name);

  useEffect(() => {
    dispatch(getProductDetail(Name));
    setUpdateReviews(false)    
  }, [dispatch, Name, updateReviews]);

  useEffect(() => {
    console.log(userActive);
    dispatch(getCart());    
  }, []);

  return (
    
    <div className="DetailContainer">
      <div>
        <p>{detail.calification}</p>
        <StarsCalification width={20} calif={detail.calification}/>
      </div>
      {/* <Link className="Link" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#000"
          className="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
        </svg>
      </Link>
      
      <img src={detail.image} alt='img'/> */}
      <div className="DataDiv">
        <div className="TypeBrandDiv">
        <p>{detail.type}</p>
        <p>{detail.brand}</p>
        </div>
        <h1>{Name}</h1>
        <h2>$ {detail.price}</h2>
        <p>{detail.description}</p>
      </div>

      {!detail.inCart?
      <AddToCart 
        name={Name} 
        price={detail.price}
        image={detail.image} 
      />
      : <>
          <p>This product is already in your cart</p>
          <p>Amount: {product?.amount}</p> 
          {/* EL ? EVITA QUE ROMPA LA WEB DE DETAIL POST DELETE CAR POST PAYMENT */}
        </>
      }
      {detail.reviews?.map((r)=>(
        <div>
          <StarsCalification width={10} calif={r.calification}/>
          <p>{r.nameUser + " " +r.lastnameUser + ": "+ r.comment}</p>
        </div>
     )) }
     {userActive!==null?<Review setUpdateReviews={setUpdateReviews} nameUser={userActive.name} lastnameUser={userActive.lastname} productId={detail.id}/>
      :<p>You must login to make a review</p>}
    </div>
  );
};