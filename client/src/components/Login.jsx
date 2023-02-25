import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { userLogin, UserActive, ChangeNav } from '../redux/actions/UsersActions';
import swal from 'sweetalert';

function validate(input) {

    let errors = {};
    const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!input.password) {
        errors.password = "password is required";
    }

    if (input.password.length > 12) {
        errors.password = "Max 12 caracteres";
    }

    if (input.password.length < 5) {
        errors.password = "Min 5 caracteres";
    }
    if (input.email && !regexEmail.test(input.email)) {
        errors.email = "insert email valid";
    }
    if (!input.email) {
        errors.email = "email is required";
    }
    return errors;
};


export const Login = () => {
    const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [errormsg, setErrormsg] = useState(false)
    const [input, setInput] = useState({
        email: "",
        password: "",
    });


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };



    async function handleSubmit(e) {
        e.preventDefault();
 
        if (!input.password || !input.email) {
            return swal("Invalid", "Missing required fields!", "error");
        }
        else {
            const response = await dispatch(userLogin(input));
            if (response.data.success) {
                dispatch(UserActive(response.data))
                dispatch(ChangeNav())
                setErrormsg(false)
                setTimeout(() => {
                    setInput({
                        email: "",
                        password: ""
                    });
                    navigate("/Profile")
                }, 1300)

            } else {
                setErrormsg(true)
                setTimeout(() => {
                    setErrormsg(false)
                }, 5000)
                return
            }

        }

        // if (input.email && input.email.length > 0 && input.email !== "") {
        //     if (!regexEmail.test(input.email)) {
        //         // return swal("Invalid","Email invalid", "error")
        //         return setErrors(errors.password = "invalid pass")
        //     }
        //   }
        //   if (input.password && input.password.length > 0 && input.password !== "") {
        //     if (!regexPassword.test(input.password)) {
        //         return setErrors(errors.password = "invalid pass")
        //         // return swal("Invalid","Password invalid", "error")
        //     }
        //   }

    }

    return (
        <div className={styles.ContainerAllForm}>
            <Form className={styles.ContainerAll} onSubmit={e => handleSubmit(e)}>
                <div className={styles.register}>
                    <h2>Login</h2>
                </div>
                <Form.Group className={styles.pack} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' onChange={e => handleChange(e)} value={input.email} className={styles.inputs} type="email" placeholder="Enter email" />
                    {/* {(errors.email && input.email.length > 0) && (<p className={styles.spanError}>{errors.email}</p>)} */}
                </Form.Group>
                <Form.Group className={styles.pack} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={styles.inputs} name='password' value={input.password} onChange={e => handleChange(e)} type="password" placeholder="Password" />
                    {/* {(errors.password && input.password.length > 0) && (<p className={styles.spanError}>{errors.password}</p>)} */}
                </Form.Group>
                {errormsg && <small className={styles.msgerr}>Password or email invalid</small>}
                <div className={styles.containerBtn}> 
                    <Button className={styles.btnR} type="submit">
                        Login
                    </Button>
                </div>
                <div className={styles.containerBtn}>
                    <Button className={styles.btnR} type="submit">
                        <FcGoogle className={styles.icon} />
                        Continue with Google
                    </Button>
                </div>
                <div className={styles.down}>
                    <h5>Dont have an account? <Link to="/Register"><button className={styles.here}>Register</button></Link> </h5>
                </div>
            </Form>
        </div>
    )

}
