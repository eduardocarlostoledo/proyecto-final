import React, {useEffect, useState} from 'react';
import styles from "../styles/adminProducts.module.css";
import { getAllUsers } from "../redux/actions/UsersActions";
import { useDispatch, useSelector } from 'react-redux';
import {BsFillPeopleFill} from "react-icons/bs"
import {MdProductionQuantityLimits, MdPowerSettingsNew }from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"
import {TfiReload} from "react-icons/tfi"



export const AdminProducts = () => {
    const userActive = JSON.parse(localStorage.getItem("USUARIO"))
    useEffect(()=> {
        dispatch(getAllUsers())
    }, [])
    const dispatch = useDispatch();
    let users = useSelector((state) => state.users || [])
    const [paginaa, setPaginaa] = useState(1)   
    const [porPagina, SetPorPagina] = useState(11) 
    
    const test = (e)=> {
        e.preventDefault();
        dispatch(getAllUsers())
    }

    const nextPage = () => {
        setPaginaa(paginaa + 1)
    }
    const prevPage = () => {
        setPaginaa(paginaa - 1)
    }
    
    const [uss, setus] = useState(false)

    const us = [{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"},{name: "franco"}]
    const maximo = us.length / porPagina  

  return (
    <div className={styles.ContainerAll}>

        <div className={styles.ContainerTop}>
        
          <div className={styles.Menu}>
          <button className={styles.MenuBtn} onClick={()=> setus(!uss)}>Menu</button>
          {uss && <div className={styles.MenuOption}>
     <div><AiFillSetting></AiFillSetting> Settings</div>  
      <div><BsFillPeopleFill></BsFillPeopleFill> Users</div>  
      <div> <MdProductionQuantityLimits></MdProductionQuantityLimits> Products</div>  
      <div> <MdPowerSettingsNew></MdPowerSettingsNew> Log out</div> </div>
    }
         </div>
            <div>
                <strong>ADMIN</strong> {userActive ? userActive.name : "hola"} {userActive ? userActive.lastname : "lastname"}</div>
            <div>
               <input type="text" /> 
               <button onClick={(e) => test(e)}>buscar</button>
              <button><TfiReload></TfiReload></button>
            </div>
            <div>
                 <select name="" id="">
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                 </select>
                 <select name="" id="">
                    <option value="">Ciudad</option>
                    <option value="">Buenos Aires</option>
                 </select>
                 <select name="" id="">
                    <option value="">Status</option>
                    <option value="">Active</option>
                    <option value="">Banned</option>
                 </select>
            </div>
        </div>


        <div className={styles.Containerinfo}>
            <div className={styles.Info}>
                <h3>N</h3>
                <h3>Name</h3>
                <h3>LastName</h3>
                <h3>Email</h3>
                <h3>Phone</h3>
                <h3>City</h3>
                <h3>Country</h3>
                <h3>Address</h3>  
                <h3>Status</h3>  
            </div>
        <div className={styles.Info}>
            <h6>1</h6>
            <h6>Franco</h6>
            <h6>Chaparro</h6>
            <h6>francoo_chaparro@hotmail.com</h6>
            <h6>+5491111111111</h6>
            <h6>Buenos Aires</h6>
            <h6>Argentina</h6>
            <h6>Jose Marmol 515</h6>
            <h6>TRUE</h6>
        </div>
            {
            us.length > 0 && us.map((e, index) => {
            return   <div className={styles.Info} key={index}>
                    <h6>{index+1}</h6>
                    <h6>{e.name}</h6>
                    <h6>{e.lastname}</h6>
                    <h6>{e.email}</h6>
                    <h6>{e.phonenumber}</h6>
                    <h6>{e.city}</h6>
                    <h6>{e.country}</h6>
                    <h6>{e.address}</h6>
                    <h6>{e.status}</h6>
                </div>
 }).slice((paginaa - 1 ) * porPagina, (paginaa - 1) * porPagina + porPagina)
            }

        </div>

        <div className={styles.footeradmin}>
               <div>
                        <button onClick={() => prevPage()} disabled={paginaa === 1 || paginaa < 1}>Prev</button>
                        <button>{paginaa}</button>
                        <button onClick={()=> nextPage()} disabled={paginaa === maximo || paginaa > maximo} >Next</button>
               </div>
        </div>
    </div>

  )
}
