import  {PostComponent} from './Food_post.jsx';
import { useEffect, useState } from 'react';
import { Categories } from './categories.jsx';
import React from 'react';
import  Search_bar from './search_bar.jsx';


export function Main_page() 
{
  const [foodItem_details_initial, setFood_Items] = useState([]);
  const [categories_intial, setCategories] = useState([]);
  const [currentTab, setCurrentTab] = useState("recommended");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(()=>{
    console.log("food items updated:");

    const apiCategoriesTemp=["recommended","Desserts","Snacks","Beverages", "Main Course", "Appetizers", "Salads"];

    
    const apiFoodItemsTemp= [{
    nameOfDish:"Gulab Jamun",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz-tVA0piBUY6FFfCCyOP6rkRfDV-yvcyj3x2JcFKPZCfd-EIhcgUqYkDUVPeV07xtP68nrloD_gtIxsc1SWg2qwg7P1ISImT14J_48zG&s=10",
    price: 150,
    description:" Gulab jamun is a sweet confectionery or dessert, originating in the Indian subcontinent, and a type of mithai popular in India",
    vegOrNot:true,
    category:"Desserts",
    },{ 
    nameOfDish:"Samosa",
    image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA7AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xAA+EAACAQMDAgQEBAMHAwQDAAABAgMABBEFEiExQQYTIlEyYXGBFEKRoSNSsRUzYsHR4fAHFiQlcpPxQ1Nj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAQIFBv/EACgRAAICAgMAAgIBBAMAAAAAAAABAgMRIQQSMSJBE1EyBWGBkRRCcf/aAAwDAQACEQMRAD8AdgFAww/SsJGMYNeAFFCrya1d9qndz9O1bIVnkw2O5z+lUZZVY7S3P0rfUJltjHNIrbVyCB1xVKyuILkmSORZMdu9ZU4uXXOyjdoXZshu9S28EhbNTAByAAeK3uJfwdu0nU49Iz3qrLI1xcpfRDD/AOH5hlIQBd+Tx/zmstQDbm527UZsqCMHHb9aQ31a+1DWAHfzFVsBCejEHtjmjUGtXDYtr5xv3DYQMKffNc+3nRUXjTxlFdthq/8AMaEtvK56YoloSGHT7cCTcZAXYk9SSaC6jer+EGWG4cDFVfDniu0QfgL+4jgkRv4Mj8KwPbPvXnOP",
    price: 80,
    description:"A crispy and delicious Indian snack",
    vegOrNot:true,
    category:"Snacks",
    },{
    nameOfDish:"Chicken Biryani",
    image:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/06/Chicken-Biryani-500x500.jpg",
    price: 250,
    description:"A flavorful rice dish with marinated chicken and aromatic spices",
    vegOrNot:false,
    category:"Main Course",
    },
    {
    nameOfDish:"Caesar Salad",
    image:"https://www.simplyrecipes.com/thmb/3pWc1kYJX1Z3m0C2u6U5l8g0Z5M=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Caesar-Salad-LEAD-05-4bfb6f6fc6e34f2e8b2f4d1e1f3c5f4a.jpg",
    price: 120,
    description:"A classic salad with romaine lettuce, croutons, and Caesar dressing",
    vegOrNot:true,
    category:"Salads",
    }];
    setFood_Items(apiFoodItemsTemp); 
    setCategories(apiCategoriesTemp);

  },[]);

  function setCurrentTabHandler(tabName)
  {
    setCurrentTab(tabName);
  }
// ---------------------------------------------------------------------------
  // function foodItem_detailsHandler(details)
  // {
  //   setFood_Items((prevDetails)=>{
  //     return [...prevDetails,details];
  //   });
  // }

  // function addFoodItem()
  // {
  //   setFood_Items(foodItem_details_initial);
  // }

// ---------------------------------------------------------------------------

  //only for converting array of objects to array of components.
  const categoriesComponentsArray = categories_intial.map((category)=>(
    <Categories
     key={category}
     categoriesProps={category}
     setCurrentTabHandler={setCurrentTabHandler}
     currentTab={currentTab}/>
  ));
  
  // Filter food items based on current tab
  const filteredFoodItems = foodItem_details_initial.filter((item)=>{
    if(currentTab === "recommended") return true;
    //currently each item is in recommended category.
    return item.category === currentTab;
  });
  
  // Further filter food items based on search term
  const searchAndFilteredFoodItems = filteredFoodItems.filter((item)=>{
    return item.nameOfDish.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const PostComponentsArray = searchAndFilteredFoodItems.map((item)=>(
    <PostComponent 
     key={item.nameOfDish}
     nameOfDish={item.nameOfDish}
     image={item.image}
     price={item.price}
     vegOrNot={item.vegOrNot}
     description={item.description}/>
  ));


  return (
    <div className="flex flex-col items-center justify-center w-full p-5">
      
        <div className="flex gap-4 flex-wrap justify-center items-center mb-8 w-full">
          {categoriesComponentsArray}
          <Search_bar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full max-w-6xl justify-items-center">
          {PostComponentsArray}
        </div>
    </div>
  )
}

