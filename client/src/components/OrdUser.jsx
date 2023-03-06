import React from 'react';
import '../styles/OrdUser.css';

export const OrdUser = ({id, name, lastname, email, image, phonenumber, country, city, address}) => {
  return (
    <div className='ContainerUser'>
        <div>
            {/* <h5><b>Id </b> {id}</h5> */}
            <h5><b>Name </b> {name}</h5>
            <h5><b>LastName </b>{lastname}</h5>
            <h5><b>Email </b>{email}</h5>
        </div>
        <img src={image} width="100px" alt="" />
        <div>
        <h5>Phone: {phonenumber}</h5>
        <h5>Country: {country}</h5>
        <h5>City: {city}</h5>
        <h5>Address: {address}</h5>
        </div>
    </div>
  )
}