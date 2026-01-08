import React, { useEffect } from 'react';
import {useState} from 'react';
import FoodItemsOnOffer from './fooditemsonoffer';
import OfferBannerWithTimer from './offer_banner_with_timer.jsx';


export function Home() {  
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [foodItemsOnOffer, setFoodItemsOnOffer] = useState([]);
    useEffect(() => {
        // Fetch restaurant info from API (simulated here with a timeout)
        const apiRestaurantInfo = {
            name: "Foodie's Hub",
            location: "123 Flavor Street, Tasty Town",
            image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.5,
        };
        const apiFoodItemsonOffer = [
           {
            nameOfDish:"Gulab Jamun",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz-tVA0piBUY6FFfCCyOP6rkRfDV-yvcyj3x2JcFKPZCfd-EIhcgUqYkDUVPeV07xtP68nrloD_gtIxsc1SWg2qwg7P1ISImT14J_48zG&s=10",
            price: 150,
            discountedPrice:120,
            description:" Gulab jamun is a sweet confectionery or dessert, originating in the Indian subcontinent, and a type of mithai popular in India",
            vegOrNot:true,
            category:"Desserts",
            },{ 
            nameOfDish:"Samosa",
            image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA7AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xAA+EAACAQM   DAgQEBAMHAwQDAAABAgMABBEFEiExQQYTIlEyYXGBFEKRoSNSsRUzYsHR4fAHFiQlcpPxQ1Nj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAQIFBv/EACgRAAICAgMAAgIBBAMAAAAAAAABAgMRIQQSMSJBE1EyBWGBkRRCcf/aAAwDAQACEQMRAD8AdgFAww/SsJGMYNeAFFCrya1d9qndz9O1bIVnkw2O5z+lUZZVY7S3P0rfUJltjHNIrbVyCB1xVKyuILkmSORZMdu9ZU4uXXOyjdoXZshu9S28EhbNTAByAAeK3uJfwdu0nU49Iz3qrLI1xcpfRDD/AOH5hlIQBd+Tx/zmstQDbm527UZsqCMHHb9aQ31a+1DWAHfzFVsBCejEHtjmjUGtXDYtr5xv3DYQMKffNc+3nRUXjTxlFdthq/8AMaEtvK56YoloSGHT7cCTcZAXYk9SSaC6jer+EGWG4cDFVfDniu0QfgL+4jgkRv4Mj8KwPbPvXnOP",         
            price: 80,
            discountedPrice:60,
            description:"A crispy and delicious Indian snack",
            vegOrNot:true,
            category:"Snacks",
            },{
            nameOfDish:"Chicken Biryani", 
            image:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/06/Chicken-Biryani-500x500.jpg",
            price: 250,
            discountedPrice:200,
            description:"A flavorful rice dish with marinated chicken and aromatic spices",
            vegOrNot:false,
            category:"Main Course",
            },
        ];
        setRestaurantInfo(apiRestaurantInfo);
        setFoodItemsOnOffer(apiFoodItemsonOffer);
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto p-3">
            
            {/* 1. TOP SECTION: Full Width Banner */}
            <div className="mb-5">
                <OfferBannerWithTimer />
            </div>

            {/* 2. BOTTOM SECTION: The Split Grid */}
            <div className="grid grid-cols-1 gap-5 items-start mt-5 bg-gray-800">
                
                {/* Left Column: Restaurant Info (Stays fixed size or takes 30%) */}
                <div className="bg-white rounded-lg shadow-md m-5 col-span-1 col-start-2 md:col-start-1">
                    <RestaurantInfo {...restaurantInfo} />
                </div>

                {/* Right Column: Offers Grid (Takes remaining space) */}
                <div className="min-w-0 overflow-hidden">
                    <OffersSection allOffers={foodItemsOnOffer} />
                </div>

            </div>
            
        </div>
    );
}


function RestaurantInfo({name, location, image, rating}) {
    return (
        <div className="p-5 border-b border-gray-300 text-center">
            <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full mx-auto" />
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
            <p className="text-gray-600">{location}</p>
            <p className="text-gray-800 mt-2 font-semibold">Rating: {rating} / 5</p>
        </div>
    );
}


function OffersSection({ allOffers }) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-4 p-3">Special Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 max-h-[600px] overflow-y-auto p-3 w-full scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-200">
                {allOffers.map((item, index) => (
                    <FoodItemsOnOffer key={index} foodItems={item} />
                ))}
            </div>
        </div>
    );
}