import { Plus } from 'lucide-react';
import { useState } from 'react';

export function PostComponent({nameOfDish , image ,price,description,vegOrNot}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleAddClick = () => {
    console.log("Added to cart");
    //add items to localStorage
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("Existing items in cart:", existingCartItems);
    const updatedCartItems = [...existingCartItems, {nameOfDish, image, price, description, vegOrNot}];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    console.log("Current items in cart:", localStorage.getItem("cartItems"));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (  
    <div className="bg-white rounded-lg border-2 border-gray-300 p-4 shadow-md w-full max-w-lg box-border">
      <button onClick={toggleVisibility} className="mb-2 py-2 px-4 bg-custom-orange text-white border-none rounded-md cursor-pointer">
        {isVisible ? "Hide" : "Show"} Dish
      </button>
      {isVisible &&
       <div className="flex gap-4 flex-wrap"> 
        <img src={image}
          className="w-24 h-32 m-0 rounded-lg object-cover flex-shrink-0"
          alt={nameOfDish}
        />
        <div className="flex-1 min-w-[200px] flex flex-col justify-between">
          <div>
            <div className="text-base mb-2 flex items-center gap-2">
              <b>{nameOfDish}</b>
              { (vegOrNot===true)?<VegIcon/>:<NonVegIcon/> }
            </div>
            <div className="text-sm text-gray-500 leading-snug mb-2.5">
              {description}
            </div>
          </div>
          
          <div className="text-sm flex justify-between items-center gap-2.5">
            <span className="font-bold text-custom-orange">₹{price}</span>

            <button 
              onClick={handleAddClick}
              className="whitespace-nowrap text-xs bg-orange-50 text-custom-orange border border-orange-200 py-2 px-3 rounded-md font-bold cursor-pointer flex items-center gap-1.5 transition-all duration-200">
              ADD <Plus size={14} strokeWidth={3} />
            </button>
          </div>
         </div>
       </div>}
    </div>
  );
}

const VegIcon = () => (
  <div className="w-4 h-4 border border-green-600 p-[2px] flex items-center justify-center bg-white min-w-[16px] min-h-[16px] flex-shrink-0">
    <div className="w-2 h-2 rounded-full bg-green-600"></div>
  </div>
);

const NonVegIcon = () => (
  <div className="w-4 h-4 border border-red-600 p-[2px] flex items-center justify-center bg-white min-w-[16px] min-h-[16px] flex-shrink-0">
    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-red-600"></div>
  </div>
);
