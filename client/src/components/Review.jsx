import React, { useEffect, useState } from 'react';
import "../styles/Reviews.css";
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/actions/ProductActions';
import StarsCalification from './StarsCalification';
import swal from 'sweetalert';

const Review = ({productId,nameUser,lastnameUser, setUpdateReviews}) => {
    const [comment,setComment] = useState('');
    const [calification,setCalification] = useState(1);
    const [key,setKey] = useState(Date.now()); //clave dinamica
    
    const dispatch=useDispatch();

    const handleInput=(e)=>{
        setComment(e.target.value)
    }

    const handleClick=()=>{
        if (!comment) {
            swal('You must enter a comment', "You must enter a comment", 'error')
            return
        }
        const review={
            nameUser,
            lastnameUser,
            calification,
            comment
        }
        setComment("")
        setCalification(1)
        setKey(key + 1);
        dispatch(addReview(productId,review))
        setUpdateReviews(true)

    }
    return (
        <div className='ContainerReviews'>
            <StarsCalification setCalif={setCalification} key={key}/>
            <input className='inputReview' onChange={handleInput} type="text" value={comment}/>
            <button className='ButtonReview' onClick={handleClick}>Send review</button>
            
        </div>
    );
};

export default Review;