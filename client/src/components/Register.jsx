import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import styles from "../styles/Register.module.css";
import { Link } from 'react-router-dom';




function validate(input) {

    let errors = {};
    const regexName = /^([a-zA-Z ]+)$/i;
    const regexNumber = /^[0-9]*$/i;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (input.name && !regexName.test(input.name)) {
      errors.name = "can't include special characters or numbers";
    }
    if (!input.name) {
      errors.name = "Name is required";
    }
    if (input.name.length > 15) {
      errors.name = "Max 12 caracteres";
    }
    if (input.name.length < 2) {
      errors.name = "Min 2 caracteres";
    }
     if (input.lastname && !regexName.test(input.lastname)) {
      errors.lastname = "can't include special characters";
    }
    if (!input.lastname) {
      errors.lastname = "lastname is required";
    }
    if (input.lastname.length > 15) {
      errors.lastname = "Max 12 caracteres";
    }
    if (input.lastname.length < 2) {
      errors.lastname = "Min 2 caracteres";
    }
    if (!input.password) {
        errors.password = "password is required";
    }
    
    if (input.password.length > 12) {
        errors.password = "Max 12 caracteres";
    }
    
    if (input.password.length < 5) {
        errors.password = "Min 5 caracteres";
    }
    if (input.passwordConfirm !== input.password) {
        errors.passwordConfirm = "passwords must match";
    }
    if (input.email && !regexEmail.test(input.email)) {
        errors.email = "insert email valid";
    }
    if (!input.email) {
        errors.email = "email is required";
    }
    return errors;
};


export const Register = () => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        passwordConfirm: "",
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
    return (
        <div className={styles.ContainerAllForm}>
            <Form className={styles.ContainerAll}>
                <div className={styles.register}>
                    <h2>Register</h2>
                </div>
              
              
                <div className={styles.hola}>
                    <Form.Group className={styles.pack} controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={input.name}  onChange={e => handleChange(e)} className={styles.name} type="text" placeholder="User Name" />
                        {(errors.name && input.name.length > 0 ) && (<p className={styles.spanError}>{errors.name}</p>)}
                    </Form.Group>
                    <Form.Group className={styles.pack} controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name='lastname' value={input.lastname}  onChange={e => handleChange(e)} className={styles.lastname} type="text" placeholder="User Lastname" />
                         {(errors.lastname && input.lastname.length > 0 ) && (<p className={styles.spanError}>{errors.lastname}</p>)}
                    </Form.Group>
                </div>
               
               
                <Form.Group className={styles.pack} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email'  onChange={e => handleChange(e)} value={input.email} className={styles.inputs} type="email" placeholder="Enter email" />
                    {(errors.email && input.email.length > 0 ) && (<p className={styles.spanError}>{errors.email}</p>)}
                </Form.Group>
               
               
               
                <Form.Group className={styles.pack} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' value={input.password} onChange={e => handleChange(e)} className={styles.inputs} type="password" placeholder="Password" />
                    {(errors.password && input.password.length > 0 ) && (<p className={styles.spanError}>{errors.password}</p>)}
                </Form.Group>

                <Form.Group className={styles.pack} controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='passwordConfirm' value={input.passwordConfirm} onChange={e => handleChange(e)} className={styles.inputs} type="password" placeholder="Password" />
                    {(errors.passwordConfirm && input.passwordConfirm.length > 0 ) && (<p className={styles.spanError}>{errors.passwordConfirm}</p>)}
                </Form.Group>


                <div className={styles.containerBtn}>
                    <Button className={styles.btnR} type="submit">
                        Register
                    </Button>
                </div>
              
              
                <div className={styles.down}>
                    <h5>Alredy have an account? <Link to="/Login"><button className={styles.here}>Login here</button></Link></h5>
                </div>
            </Form>
        </div>
    )

}