import { Outlet, Route, Routes,useNavigate } from "react-router-dom";
import { Profile_details } from "./profile_details.jsx";
import { Myorders } from "./myorders.jsx";
import { Offers } from "./offers.jsx";
import { Settings } from "./settings.jsx";
import { Help } from "./help.jsx";

export function Profile(){
    return (
        <Routes>
            {/* The parent route for this section */}
            <Route path="/" element={<Profile_page/>}>
                {/* Nested child routes (relative paths) */}
                <Route path="details" element={<Profile_details/>} />
                <Route path="myorders" element={<Myorders/>} />
                <Route path="offers" element={<Offers/>} />
                <Route path="settings" element={<Settings/>} />
                <Route path="help" element={<Help/>} />
            </Route>
        </Routes>
    );
}


function Profile_page() { 
    const navigate = useNavigate();
    function setHandleNavigation(page) {
        navigate(`${page}`);
    }
    
    return (
        //sidebar part
        <div className="flex">
            <div className="transition delay-6000 w-64 h-screen bg-gray-200 hidden md:block">
                <ul>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setHandleNavigation("details")}>Profile</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setHandleNavigation("myorders")}>my orders</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setHandleNavigation("offers")}>offers</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setHandleNavigation("settings")}>Settings</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setHandleNavigation("help")}>Help</button></li>
                </ul>
            </div>
            {/* content part */}
            <div className="w-full h-screen bg-white">
                <Outlet />
            </div>
        </div>    
    ); 
}