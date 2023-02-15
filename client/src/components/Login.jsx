import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.css";
import { Link } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc';


export const Login = () => {
    return (
        <div className={styles.ContainerAllForm}>
            <Form className={styles.ContainerAll}>
            <div className={styles.register}>
                <h2>Login</h2>
            </div>
                <Form.Group className={styles.pack} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={styles.inputs} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className={styles.pack} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={styles.inputs} type="password" placeholder="Password" />
                </Form.Group>
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
