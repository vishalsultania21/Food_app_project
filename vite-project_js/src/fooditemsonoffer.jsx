function FoodItemsOnOffer({ foodItems }) {
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col">
            <div className="relative">
                <img 
                    src={foodItems.image} 
                    alt={foodItems.nameOfDish} 
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OFFER
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800">
                        {foodItems.nameOfDish}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 h-10 overflow-hidden">
                        {foodItems.description}
                    </p>
                </div>
                
                <div className="mt-4">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900">
                            ₹{foodItems.discountedPrice}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{foodItems.price}
                        </span>
                        <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full ml-auto">
                            {Math.round(((foodItems.price - foodItems.discountedPrice) / foodItems.price) * 100)}% OFF
                        </span>
                    </div>
                    
                    <button className="bg-custom-orange text-white font-bold py-2 px-4 rounded-lg mt-4 w-full hover:bg-orange-600 transition-colors">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodItemsOnOffer;