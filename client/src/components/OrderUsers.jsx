import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Tag } from "antd"
import {AiFillSetting} from "react-icons/ai"

import { addAllOrders } from '../redux/actions/OrderActions'

export const OrderUsers = () => {

    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addAllOrders())
    },[dispatch])

    let orders = useSelector((state) => state.order || [])
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          sorter: (a, b) => a.id - b.id,
          defaultSortOrder: 'descend',
          render: (text) => <p>{text}</p>,
        },
        {
          title: 'Usuario ID',
          dataIndex: 'userId',
          render: (text) => <p>{text}</p>,
        },
        {
          title: 'Payment ID',
          dataIndex: 'paymentId',
          render: (text) => <p>{text}</p>,
        },
        {
          title: 'Status ID',
          dataIndex: 'statusId',
          filters: [
            { text: 'Pending', value: 'pending' },
            { text: 'Failure', value: 'failure' },
            { text: 'Sucsess', value: 'success'}
          ],
          onFilter: (value, record) => record.statusId.indexOf(value) === 0,
          render: (statusId) => (
            <>
                {statusId === "success" ? (
                    <Tag color="green">Success</Tag>
                    ) : statusId === "failure" ? (
                    <Tag color="red">Failure</Tag>
                    ) : (
                    <Tag color="yellow">Pending</Tag>
                )}
            </>
          ),
        },
        {
          title: 'Merchant Order ID',
          dataIndex: 'merchantOrderId',
          render: (text) => <p>{text}</p>,
        },
        {
          title: 'Acciones',
          dataIndex: '',
          render: (value) => (
            <button onClick={() => console.log(value.password)}>
              <AiFillSetting />
            </button>
          ),
        },
      ];

  return (
    <div style={{marginTop: "100px", padding: "60px"}}>

        <Table  columns={columns} dataSource={orders}/>
    </div>
    
  )
}

