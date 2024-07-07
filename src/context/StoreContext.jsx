import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

// to add support to this context we will add in main.jsx
const StoreContextProvider = (props)=>{

    // cartItems has item id and its quantity
    const [cartItems, setCartItems] = useState({});
    const url = "https://zestybackend.onrender.com"
    const [token,setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    // if an error occurs try uncommenting this 
    // {console.log(cartItems)};


    // instead of the count varibable for cpunting items we will use this 
    const addToCart = async (itemId)=>{
        if(!cartItems[itemId]){    // when user add item first time in cart 
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{    // if item is already available then just inc the quantity
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
        }
    }
    
    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        // for in loop will iterate over the object ir cartItems - and item will provide all items one -by one
        for(const item in cartItems){
            if(cartItems[item]>0){        //execute when quantity of that item in cart is greater than 0
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
 
    const fetchFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list");

// ch
        // console.log(response.data.data);
        
        
        setFoodList(response.data.data);
    }  

    const loadCartData = async (token)=>{
        try{
            const response = await axios.get(url+"/api/cart/get",{headers:{token}})


            // ch
            console.log(response.data);
            
            
            //save the data in cartItem 
            setCartItems(response.data.cartData);
            
            
            // ch
            console.log(cartItems);
        }catch(error){
            console.error('Error loading cart data:', error);
        }
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        //we can add any element here and it will be shared 
        // now using this context we can access the food_list anywhere
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;