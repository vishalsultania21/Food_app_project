import { useEffect, useState } from 'react';
import {Main_page} from './main_page.jsx';
import {Navbar} from './navbar.jsx';
import {Bill} from './bill.jsx';
import {Reorder} from './reorder.jsx';
import Waiter from './waiter.jsx'; 
import {Error} from './errorpage.jsx';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {Home} from './home.jsx';
import {SignUp} from './signup.jsx';
import {Profile} from './profile.jsx';

function App() 
{
  
  return (
      <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<Main_page />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Main_page/>} />
            <Route path="/reorder" element={<Reorder />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/waiter" element={<Waiter />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}


function Layout() 
{
  const [owner_details_style, setOwnerDetailsStyle] = useState({});
  const [navbutton, setNavbutton] = useState("menu");
  useEffect(()=>{
  const apiOwnerDetailsStyle={
      font_style:"Arial, sans-serif",
      name:"Foodie's Hub",
    }
    setOwnerDetailsStyle(apiOwnerDetailsStyle);
  },[]);

  return (

    <div className="h-screen">
      <Navbar ownerDetails={owner_details_style} setNavbutton={setNavbutton} navButton={navbutton} />
      <Outlet />
    </div>

  );
}

export default App;