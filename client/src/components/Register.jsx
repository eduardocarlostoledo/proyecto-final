import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./Register.module.css";
import { Link } from 'react-router-dom';
export const Register = () => {
    return (
        <div className={styles.ContainerAllForm}>
            <Form className={styles.ContainerAll}>
            <div className={styles.register}>
                <h2>Register</h2>
            </div>
            <div className={styles.hola}>
                <Form.Group className={styles.pack} controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className={styles.name} type="text" placeholder="User Name" />
                </Form.Group>
                <Form.Group className={styles.pack} controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className={styles.lastname} type="text" placeholder="User Lastname" />
                </Form.Group>
            </div>
                <Form.Group className={styles.pack} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={styles.inputs} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className={styles.pack} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  className={styles.inputs} type="password" placeholder="Password" />
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
