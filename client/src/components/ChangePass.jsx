import React, { useEffect } from "react";
import {useState} from "react"
import axios from "axios"

export default function ChangePass (){

    const [fall, setFall] = useState()
    const [input, setInput] = useState({
        codeUser: 1,
        codeAxios: 1,
        email: "",
        hola: "",
        password1: "",
        password2: ""
    })
    const [alerta, setAlerta] = useState("")
    const [render, setRender] = useState(1)

    let vaciar = () =>{
        document.getElementsByTagName("input")[0].value = "";
    }

    const envioMail = () => {
        axios
        .post('http://localhost:3001/users/changePass',{
            email : input.email
        })
        .then((res) => {
           setInput({...input, codeAxios: res.data.pass})
        })
    }


    const handleSubmit = () => {

        axios.get('http://localhost:3001/users')
            .then(async (res) => {
                let eso = res.data.data
                let encuentra = await eso.find((e) => e.email === input.email )
                setFall(encuentra?.id)

                if(encuentra == undefined){ 
                    setAlerta('este usuario no ha sido registrado, vuelve a intentar o create una cuenta')
                }
                else{ 
                    setAlerta('se ha enviado a tu email un codigo de verificacion para permitir el cambio de contraseña, ingresalo a continuacion:')
                    envioMail()
                    setRender(2)
                }
            })

            vaciar();
    }

    const compareCode = () => {
        if(input.codeUser == input.codeAxios ){
            setRender(3);
            setAlerta('');
            vaciar();
        }else{
            setAlerta('el codigo ingresado no coincide con el que le fue enviado, vuelve a intentarlo')
        }      
    }


    const changePassword = () => {
            if(input.password1.length >= 8 && input.password1 === input.password2){
                axios
                .put(`http://localhost:3001/users/${fall}`,{
                    password : input.password1
                })
                .then((res) => {
                setRender(4)
                })
            }else{
                setAlerta('las contraseñas no coincididen o no cumplen con los requisitos de seguridad')
            } 
    }


    if(render === 1){
        return(
            <div style={{width: "500px", height: "400px", backgroundColor:"white", zIndex: "99999999", position: "fixed", marginTop: "100px", marginLeft: "400px"}}>
                ingresa a continuacion el email de la cuenta a la cual deseas cambiar la contraseña, y sigue los pasos para la verificaion de identidad
               <input type="email" placeholder="email" onChange={(e) => setInput({...input, email: e.target.value}) }/>
                <br />
                <p style={{color:"red", fontSize:"2vh"}}>{alerta}</p>
                <button onClick={() => handleSubmit()}>send</button>
            </div>
        )
    }else if(render === 2){
        return(
            <div style={{width: "500px", height: "400px", backgroundColor:"white", zIndex: "99999999", position: "fixed", marginTop: "100px", marginLeft: "400px"}}>
                <p style={{color:"red", fontSize:"2vh"}}>{alerta}</p>
                <input defaultValue='' placeholder="codigo"  type="text" onChange={(e) => setInput({...input, codeUser: e.target.value}) }/>
                <button onClick={() => compareCode()}>send</button>
            </div>
        )
    }else if(render === 3){
        return(
            <div style={{width: "500px", height: "400px", backgroundColor:"white", zIndex: "99999999", position: "fixed", marginTop: "100px", marginLeft: "400px"}}>
                ingresa a continuacion la nueva contraseña, recuerda que debe tener almenos 1 mayuscula, 1 minuscula y 8 caracteres como minimo
                <input type="text" placeholder="nueva contraseña"  onChange={(e) => setInput({...input, password1: e.target.value}) }/> <br />
                vuelve a ingresarla <br />
                <input type="text" placeholder="nueva contraseña" onChange={(e) => setInput({...input, password2: e.target.value}) }/> <br />
                <button onClick={() => changePassword() }>send</button>
                <p style={{color:"red", fontSize:"2vh"}}>{alerta}</p>
            </div>
        )
    }else if(render === 4){
        return(
            <div  style={{color: 'green', fontSize: '4vh' , width: "500px", height: "400px", backgroundColor:"white", zIndex: "99999999", position: "fixed", marginTop: "100px", marginLeft: "400px"}}>
                su contraseña se actualizo correctamente!
            </div>
        )
    }else{
        return(
            <div style={{width: "500px", height: "400px", backgroundColor:"white", zIndex: "99999999", position: "fixed", marginTop: "100px", marginLeft: "400px"}}>
                <p style={{color:"red", fontSize:"2vh"}}>ha habido un error intentalo nuevamente mas tarde!</p>
            </div>
        )
    }
}