import React from 'react'
import './Verify.css'
import { useSearchParams,useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useEffect } from 'react';
import axios from 'axios'

const Verify = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success')    // searchParams and get the value for key success
    const orderId = searchParams.get('OrderId') 
    //backend url from storeContext
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();     // we will run this function when this verify component is loaded 
    },[])

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
