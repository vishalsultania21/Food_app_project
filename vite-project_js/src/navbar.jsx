import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const Navbar = ({ ownerDetails, setNavbutton, navButton }) => {

  const navigate = useNavigate();
  function handleNavigation(button) {
    setNavbutton(button);
    navigate(`/${button}`);
  }
  const [isloggedin, setIsloggedin] = useState(false);
  const { font_style, name } = ownerDetails;
  
  const getButtonClasses = (buttonName) => {
    const isActive = navButton === buttonName;
    return `bg-transparent py-2 px-4 cursor-pointer rounded-lg transition-all duration-300 ${
      isActive
        ? 'text-custom-orange border-2 border-custom-orange font-bold'
        : 'text-gray-300 border border-gray-400 font-normal'
    }`;
  };

  const myProfile = "text-custom-orange bg-transparent border-2 border-custom-orange py-2 px-4 cursor-pointer rounded-lg font-normal transition-all duration-300 hover:bg-custom-orange hover:text-white";

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4" style={{ fontFamily: font_style }}>
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="flex justify-center flex-grow">
        <ul className="flex list-none m-0 p-0">
          <li className="mr-4">
            <button className={getButtonClasses("home")} onClick={() => handleNavigation("home")}>
              Home
            </button>
          </li>
          <li className="mr-4">
            <button className={getButtonClasses("menu")} onClick={() => handleNavigation("menu")}>
              Menu
            </button>
          </li>
          <li className="mr-4">
            <button className={getButtonClasses("reorder")} onClick={() => handleNavigation("reorder")}>
              Reorder
            </button>
          </li>
          <li className="mr-4">
            <button className={getButtonClasses("bill")} onClick={() => handleNavigation("bill")}>
              Bill
            </button>
          </li>
          <li>
            <button className={getButtonClasses("waiter")} onClick={() => handleNavigation("waiter")}>
              Waiter
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0">
        <button className={myProfile} onClick={() => isloggedin ? handleNavigation("profile") : handleNavigation("signup")}>
          {isloggedin ? "My Profile" : "Sign Up"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;