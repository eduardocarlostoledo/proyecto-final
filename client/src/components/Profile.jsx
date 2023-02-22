import React from "react"
// import Avatar from "./Avatar"
import "../styles/Profile.css"
import { FaAddressBook, FaPhone, FaCity, FaStreetView} from "react-icons/fa";

export default function Profile() {
    return(
        <div className="contenedor_profile">
            {/* <Avatar></Avatar> */}
            <div className="div_name">
                <div className="avatar">E</div>
                <h3 className="h3_name">Name </h3>
                <h3 className="h3_lastname">Last Name</h3>
                <p>tuemail@gmail.com</p>
             </div>  
             <div className="div_info">
                <h3>informacion del usuario</h3>
                <div>
                    <FaAddressBook className="icono"></FaAddressBook>
                    <p>country: hjjgglafere</p>
                </div>
                <div>
                    <FaCity className="icono"></FaCity>
                    <p>city: Pilar</p>
                </div>
                <div>
                    <FaStreetView className="icono"></FaStreetView>
                    <p>address: calle falsa 123</p>
                </div>
                <div>
                    <FaPhone className="icono"></FaPhone>
                    <p>phonenumber: +54 9 11 5555 8899</p>
                </div>
            </div>      
        </div>
    )
}

