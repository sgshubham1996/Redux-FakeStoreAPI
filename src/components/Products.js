import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';

function Products() {
    const[product,setProduct]=useState([]);
    const dispatch = useDispatch()
    useEffect(function(){
        axios.get("https://fakestoreapi.com/products")
        .then(function(res){
           
            setProduct(res.data);
        })
    },[]);
    function handleClick(item){
      dispatch(add(item));
    }
  return (
    <div className='productsWrapper' >
      {
        product.map(function(item){
            return (
                <div className='card' key={item.id}>
                  <img src={item.image} alt=''/>
                  <h4>{item.title}</h4>
                  <h3>{item.price}</h3>
                  <button onClick={()=>handleClick(item)} className='btn' >Add to Cart</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Products