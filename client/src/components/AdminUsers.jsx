import { NavAdmin } from "./navAdmin";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag } from "antd";
import { getAllUsers, PutUser } from "../redux/actions/UsersActions";
import { AiFillSetting } from "react-icons/ai";
import { FaBan } from "react-icons/fa"
import { GrUserAdmin } from "react-icons/gr"
import swal from "sweetalert"
import { FaUserCheck } from "react-icons/fa"
import { MdOutlineVerifiedUser } from "react-icons/md"
import styles from "../styles/AdminUsers.module.css";

export const AdminUsers = () => {
 
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllUsers());
  };

  let users = useSelector((state) => state.users || []);

  const newUsers = users.map((user) => ({
    ...user,
    key: user.id,
  }));

  console.log(newUsers, "estos son los usuarios");


  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   return newUsers = newUsers[1]

  };

  console.log(name, "name");


  
  const setAdmin = (value) => {

    if (value.admin) { 
      swal({
        title: "Estas seguro que Deseas QUIIIITAR ADMIN",
        text: "QUITAR ADMIN",
        icon: "warning",
        buttons: ["No", "Si"]
      }).then( (respuesta) => {
      if(respuesta){
        dispatch(PutUser({
          ...value, admin: !value.admin
       }));
       setReload(!reload)
      }
    })
    } else { 
      swal({
        title: "Estas seguro que Deseas HACERLLOOOO ADMIN",
        text: "SERA ADMIN",
        icon: "warning",
        buttons: ["No", "Si"]
      }).then( (respuesta) => {
      if(respuesta){
        dispatch(PutUser({
          ...value, admin: !value.admin
       }));
       setReload(!reload)
      }
    })

    }


   

  }

  const setStatus = (value) => { 
    if(value.status) { 
      swal({
        title: "Estas seguro que Deseas baenar",
        text: "BANEARRR",
        icon: "warning",
        buttons: ["No", "Si"]
      }).then( (respuesta) => {
      if(respuesta){
        dispatch(PutUser({
          ...value, status: !value.status
       }));
      }
    })
    } else { 
      swal({
        title: "Estas seguro que Deseas QUITARLEEE EL BANN",
        text: "DESBANEAR",
        icon: "warning",
        buttons: ["No", "Si"]
      }).then( (respuesta) => {
      if(respuesta){
        dispatch(PutUser({
          ...value, status: !value.status
       }));
      }
    })
    }

    
 
  }


  const column = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "ascend",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      sorter: (a, b) => a.name - b.name,
      defaultSortOrder: "descend",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Admin",
      dataIndex: "admin",
      render: (value) => (
        <Tag color={value === true ? "green" : "red"}>
          {value === true ? "admin" : "No Admin"}
        </Tag>
      ),
      filters: [
        {
          text: "admin",
          value: true,
        },
        {
          text: "noAdmin",
          value: false,
        },
      ],
      onFilter: (value, record) => record.admin === value,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value) => (
        <Tag color={value === true ? "green" : "red"}>
          {value === true ? "Active" : "Banned"}
        </Tag>
      ),
      filters: [
        {
          text: "Active",
          value: true,
        },
        {
          text: "Banned",
          value: false,
        },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Actions",
      dataIndex: "",
      render: (value) => (
        <div>
          <button className={styles.btnIcons} onClick={() => console.log(value)}>
            <AiFillSetting className={styles.llave} />
          </button>

        {value.status ? <button className={styles.btnIcons}  onClick={() => setStatus(value)} >
            <FaBan className={styles.banned}/>
          </button>
          : <button  button  className={styles.btnIcons} onClick={() => setStatus(value)} >
          <FaUserCheck className={styles.Desbanned}/>
        </button>
          }
    
          {value.admin ? <button  className={styles.btnIcons} onClick={() => setAdmin(value)}>
            <GrUserAdmin className={styles.DesAdmin}/>
          </button>
        : <button button  className={styles.btnIcons} onClick={() => setAdmin(value)}>
         <MdOutlineVerifiedUser className={styles.Setadmin} /> 
      </button>}
        </div>
      ),
    },
  ];

  return (
    <div>
      <NavAdmin handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleClick={handleClick} />
     <div style={{ marginTop: "100px" }}>
        <Table columns={column} dataSource={newUsers} />
      </div>
    </div>
  );
};