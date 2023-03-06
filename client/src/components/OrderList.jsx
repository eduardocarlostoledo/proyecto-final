import React from 'react';
import '../styles/OrderList.css';

export const OrderList = ({id, cartUserId, paymentId, statusId, merchantOrderId}) => {
  return (
    <div className='ContainerOrder'>
        <h5>Id order: {id}</h5>
        <h5>Cart User id: {cartUserId}</h5>
        <h5>{paymentId}</h5>
        <h5>{statusId}</h5>
        <h5>{merchantOrderId}</h5>
    </div>
  )
}