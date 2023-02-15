
import React, { useState } from 'react';
import styles from "./Register.module.css";

export const Register = () => {
    const [set, SetTrue] = useState(true)
    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    })
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.Base}>
            <div className={set ? styles.ContainerAll : styles.ContainerAllLogin }>
                <div className={styles.register}>
                    {set ? <h2>Register</h2> : <h2>Login</h2>}
                </div>
                <form onSubmit>
                  {set ? <div className={styles.divs}>
                        <label style={{ marginLeft: "-320px" }} name='name'>Name</label><br />
                        <input type="text" name='name' placeholder='User Name' value={userData.name} onChange={(e) => handleInputChange(e)} /><br />
                        <span className></span>
                       </div> : null
                    }
                     {set ? <div className={styles.divs}>
                        <label name='lastname' style={{ marginLeft: "-294px" }}>LastName</label><br />
                        <input type="text" name='lastname' placeholder='User Lastname' value={userData.lastname} onChange={(e) => handleInputChange(e)} /><br />
                        <span className></span>
                    </div> : null
                    }
                    <div className={styles.divs}>
                        <label name='email' style={{ marginLeft: "-269px" }}>Email address</label><br />
                        <input type="email" name='email' placeholder='Enter email' value={userData.email} onChange={(e) => handleInputChange(e)} /><br />
                        <span className></span>
                    </div>
                    <div className={styles.divs}>
                        <label name='password' style={{ marginLeft: "-299px" }}>Password</label><br />
                        <input type="password" name='password' placeholder='password' className value={userData.password} onChange={(e) => handleInputChange(e)} /><br />
                        <span className ></span>
                    </div >
                    {set ? <button type='submit' className={styles.btnR}>Register</button> : <button type='submit' className={styles.btnR}>Login</button>}
                </form>
                <div className={styles.down}>
                    {set ? <h5>Alredy have an account? <button onClick={() => SetTrue(!set)} className={styles.here}>Login here</button></h5>
                        : <h5>Dont have an account? <button onClick={() => SetTrue(!set)} className={styles.here}>Register</button></h5>}
                </div>
            </div>
        </div>
    )
}