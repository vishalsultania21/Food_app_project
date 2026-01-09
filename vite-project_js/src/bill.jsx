import { useEffect, useState } from "react";
import { PostComponent } from "./Food_post";
export function Bill() {  
    const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{
        const itemsInCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(itemsInCart);
    },[]);
    function clearCart(){
        localStorage.removeItem("cartItems");
        console.log("Cart cleared");
        setCartItems([]);
    }
    const PostComponentsArray = cartItems.map((item)=>(
        <PostComponent 
         key={item.nameOfDish}
         nameOfDish={item.nameOfDish}
         image={item.image}
         price={item.price}
         vegOrNot={item.vegOrNot}
         description={item.description}/>
      ));
    return (        
        <div className="p-4 flex flex-col items-center justify-center">       
            <h1>Bill Page</h1>
            {PostComponentsArray.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : PostComponentsArray}
            <button onClick={clearCart } className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md">
                Clear Cart
            </button>
        </div>    
    ); 
}


