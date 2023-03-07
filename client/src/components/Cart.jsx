import React, { useState, useEffect } from "react";
import mercadopago from "./mercadopago";
import "../styles/Cart.css";
import swal from "sweetalert";
import ItemCart from "./ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/actions/CartActions";
import { UserActive } from "../redux/actions/UsersActions";

export default function Cart() {
  let activeUser = useSelector((state) => state.ChangeNav);
  const userActiveOwnerOfCart = useSelector((state) => state.UserActive);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((response) => response.json())
      .then((data) => setCartItems([...data]))
      .catch((error) => swal("Carrito Vacio", "Carrito Vacio", "error"));
  }, [cartItems]);

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toFixed(1);

  const description = cartItems.map((item) => item.name);

  const preferencia = cartItems.map((item) => ({
    product_description: item.name,
    product_name: item.name,
    product_image: item.image,
    product_amount: item.amount,
    product_unit_price: item.price,
    prodId: item.prodId,
  }));

  const total_order_price = total;
  const buyer_email = userActiveOwnerOfCart.email;

  preferencia.push({
    total_order_price,
    buyer_email,
  });

  const orderData = {
    quantity: 1,
    description: description.toString(),
    price: total,
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("NEW ORDER DATA", orderData);
    fetch("http://localhost:3001/pay/preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferencia),
    });
    fetch("http://localhost:3001/pay/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        console.log("RESPONSE", response);
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function () {
        alert("Unexpected error");
      });
  };

  // Create preference when click on checkout button
  const createCheckoutButton = (preferenceId) => {
    // Initialize the checkout
    mercadopago.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: "#button-checkout", // Class name where the payment button will be displayed
        label: "Pay", // Change the payment button text (optional)
      },
    });
  };

  const handleDeleteAllCart = async () => {
    try {
      // Hacer una petición DELETE al servidor para eliminar todo el contenido del carrito
      await fetch("http://localhost:3001/cart", {
        method: "DELETE",
      });
      // Actualizar el estado local del carrito para que se muestre vacío
      setCartItems([]);
    } catch (error) {
      // Si hay un error, mostrar una alerta
      swal("Error", "No se pudo eliminar el carrito", "error");
    }
  };

  return (
    <div className="ContainerCart">
      <h2 className="h2">Shopping Cart</h2>

      <div className="NavCart">
        {cartItems.length == 0 ? (
          <p>el carrito esta vacio</p>
        ) : (
          cartItems.map((item) => (
            <div>
              <ItemCart
                name={item.name}
                price={item.price}
                amount={item?.amount}
                image={item.image}
                prodId={item.prodId}
                key={item.id}
                handleDeleteAllCart={handleDeleteAllCart}
              />
            </div>
          ))
        )}
      </div>
      <button className="ButtonDeleteAll" onClick={handleDeleteAllCart}>
        Delete All Cart
      </button>

      <h3 className="h3">Total: ${total}</h3>
      {activeUser ? (
        <div className="BotonCheckout">
          <button className="ButtonCart" onClick={handleCheckout}>
            Checkout
          </button>
          <div id="button-checkout"></div>
        </div>
      ) : (
        <h1> ****** PLEASE, BEFORE BUY PRODUCTS, FIRST NEED LOGIN  ****** </h1>
      )}
    </div>
  );
}
