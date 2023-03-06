import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/OrderUser.css';
import { getAllUsers, getUserById } from '../redux/actions/UsersActions';
import { OrdUser } from './OrdUser';
import { Link } from 'react-router-dom';
import { OrderList } from './OrderList';
import { addAllOrders } from '../redux/actions/OrderActions';


export const OrderUser = () => {
  
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users);
    const orders = useSelector((state) => state.order)
    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(addAllOrders())
        dispatch(getUserById())
    },[dispatch])

    

   

  return (
    <div className='ContainerOrderUser'>
      
        
            {users.map((user) => (
                <div>
                    <OrdUser
                            id = {user.id}
                            name = {user.name}
                            lastname = {user.lastname}
                            email = {user.email}
                            image = {user.image}
                            password = {user.password}
                            phonenumber = {user.phonenumber}
                            country = {user.country}
                            city = {user.city}
                            address = {user.address}
                        />
                </div>
            ))}
    </div>
    
  )
}