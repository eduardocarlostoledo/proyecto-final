import React from 'react'

export const Order = ({userId, paymentId, statusId, merchantOrderId}) => { //id={order.id}   
  return (
    <div>
        <h3>{userId}</h3>
        <h4>{paymentId}</h4>
        <h4>{statusId}</h4>
        <p>{merchantOrderId}</p>
    </div>
  )
}
