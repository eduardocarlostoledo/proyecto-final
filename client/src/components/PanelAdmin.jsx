import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Tag } from "antd"
import { getAllUsers } from "../redux/actions/UsersActions";
import { AiFillSetting } from "react-icons/ai"

export const PanelAdmin = () => {
    const dispatch =  useDispatch()

    useEffect(()=> {
        dispatch(getAllUsers())
    }, [])




    let users = useSelector((state) => state.users || [])
    const column = [
        {
            title : "Nombre",
            dataIndex: "name",
            sorter: (a, b) => a.name - b.name,
            defaultSortOrder: 'descend',
            render: (text) => <p>{text}</p>
        }, 
        {
            title : "Email",
            dataIndex: "email",
            render: (text) => <p>{text}</p>
        },
        {
            title: "admin",
            dataIndex: "admin",
            render: (value) => <Tag color={value === true ? "green" : "red"}>{value === true ? "admin" : "No Admin"}</Tag>,
            filters: [
                {
                    text : "admin",
                    value: true
                },
                {
                    text: "noAdmin",
                    value: false
                }
            ],
            onFilter: (value, record) => record.admin === value
        },
        {
            title: "actions",
            dataIndex: "",
            render: (value) => <button onClick={()=> console.log(value.password)}><AiFillSetting /></button>,
         
        }
    ]


  return (
    <div style={{marginTop: "100px"}}>

        <Table  columns={column} dataSource={users}/>
    </div>

  )
}