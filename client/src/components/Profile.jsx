import React, { useState } from "react"
import "../styles/Profile.css"
import { BiLogOutCircle } from "react-icons/bi"
import { FaPhone, FaCity } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
import Form from 'react-bootstrap/Form';
import { PutUser, deleteUserLocalStorage } from '../redux/actions/UsersActions';
import swal from 'sweetalert';


export default function Profile() {
  const userActive = JSON.parse(localStorage.getItem("USUARIO"))
  const navigate = useNavigate();
  const [Panel, setPanel] = useState(true);
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    image: userActive.image ? userActive.image : "",
    city: userActive.city ? userActive.city : "",
    id: userActive.id,
    phonenumber: userActive.phonenumber ? userActive.phonenumber : "",
    address: userActive.address ? userActive.address : "",
    country: userActive.country ? userActive.country : "",
    email: userActive.email,
  });


  function handleChange(e) {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  function CerrarSes(e) {
    e.preventDefault();
    // dispatch(deleteUserLocalStorage())
    setTimeout(() => {
      dispatch(deleteUserLocalStorage())
      window.localStorage.removeItem("USUARIO")
      navigate("/Login")
    }, 1300)
  }

  function Cancel(e) {
    e.preventDefault();
    setPanel(true)
    setInput({

      image: userActive.image ? userActive.image : "",
      city: userActive.city ? userActive.city : "",
      id: userActive.id,
      phonenumber: userActive.phonenumber ? userActive.phonenumber : "",
      address: userActive.address ? userActive.address : "",
      country: userActive.country ? userActive.country : "",
      email: userActive.email,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.email === "") input.email = userActive.email
    if (input.password === "") input.password = userActive.password
    if (input.passwordConfirm === "") input.passwordConfirm = userActive.passwordConfirm
    if (input.phonenumber === "") input.phonenumber = userActive.phonenumber
    if (input.country === "") input.country = userActive.country
    if (input.image === "") input.image = userActive.image
    if (input.city === "") input.city = userActive.city
    dispatch(PutUser({
      ...input, name: userActive.name,
      lastname: userActive.lastname
    }));
    swal("success", 'User modified successfully', "success")
    setInput({
      ...input
    });
    setPanel(true)
  }




  return (
    <div className="contenedor_profile">
      <div className="Container">
        <div className="izquierda">
          <div className="containerImg">
            <Card.Img className="ImagenProfile" variant="top" src={userActive.image ? userActive.image : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} />
          </div>
          <div className="InfoUser">
            <div className="InfoUser-Name">
              <h3>{userActive.name}</h3>
            </div>
            <div>
              <FaCity className="icono"></FaCity><span>{userActive.city ? userActive.city : "Ciudad"}, {userActive.country ? userActive.country : "Pais"}</ span>
            </div>
            <div>
              <FaPhone className="icono"></FaPhone><span>{userActive.phonenumber ? userActive.phonenumber : "+54 9 11 2222 5555"}</span>
            </div>
            <div>
              <button className="logout" onClick={(e) => CerrarSes(e)}>
                <BiLogOutCircle></BiLogOutCircle > Log out
              </button>
            </div>
          </div>
        </div>
        {Panel ? <div className="derecha">
          <div className="hogar">
            <h1>{userActive.name} {userActive.lastname}</h1>
            <button onClick={() => setPanel(false)} className="hola"><IoSettingsOutline className="setting"></IoSettingsOutline></button>
          </div>
          <h3><a href="https://login.live.com/" target="_blank" rel="noopener noreferrer">{userActive.email}</a></h3>
          <h4>Direccion: {userActive.address ? userActive.address : "Street 151515"}</h4>
        </div>
          :
          <div className="modificar">
            <Form>
              <div className="prueba">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name='email' value={input.email} onChange={e => handleChange(e)} className="inputs" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Phonenumber">
                  <Form.Label>Phonenumber</Form.Label>
                  <Form.Control name='phonenumber' value={input.phonenumber} onChange={e => handleChange(e)} className="inputs" type="text" placeholder="Enter phonenumber" />
                </Form.Group>
              </div>

              <div className="prueba">
                <Form.Group className="mb-3" controlId="Country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control name='country' value={input.country} onChange={e => handleChange(e)} className="inputs" disabled={false} type="text" placeholder="Enter country" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control name='city' value={input.city} onChange={e => handleChange(e)} className="inputs" type="text" placeholder="Enter city" />
                </Form.Group>
              </div>
              <div className="prueba">
                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control name='address' value={input.address} onChange={e => handleChange(e)} className="inputs" type="text" placeholder="Enter address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Imagen">
                  <Form.Label>Imagen URL</Form.Label>
                  <Form.Control name='image' value={input.image} onChange={e => handleChange(e)} className="inputs" type="text" placeholder="Enter URL image" />
                </Form.Group>
              </div>
              <div className="sopapa">
                <div>
                  <button className="cancel" onClick={(e) => Cancel(e)}>
                    Cancel
                  </button>
                </div>
                <div>
                  <button className="modifi" onClick={(e) => handleSubmit(e)} >
                    Modify
                  </button>
                </div>
              </div>
            </Form>
          </div>
        }
      </div>
    </div>
  )
}

