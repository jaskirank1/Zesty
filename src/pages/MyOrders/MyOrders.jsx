import React from 'react'
import './MyOrders.css'
import { useState,useContext,useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
import {assets} from '../../assets/assets.js';

const MyOrders = () => {

    //from context we need url and token using which we can call api 
    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async() =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        console.log(response.data.data);
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])
    
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {/* //use data array and map the data */}
        {data.map((order,index)=>{
            return(
                <div key={index} className='my-orders-order'>
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if(index === order.items.length-1){     // last item from all the items ordered
                            return item.name + " x " + item.quantity
                        }
                        else{        // for rest of the items ordered 
                            return item.name + " x " + item.quantity + ", "
                        }
                    })}</p>
                    <p>&#8377;{order.amount}.00</p>
                    <p>Items: {order.items.length}</p>
                    <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                    <button onClick={fetchOrders}>Track Order</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders
