import { use, useState } from "react";

export function Profile() {
    const [selectedMenu, setSelectedMenu] = useState("Profile");
    return (
        <div className="flex">
            <div className="transition delay-6000 w-64 h-screen bg-gray-200 hidden md:block">
                <ul>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setSelectedMenu("Profile")}>Profile</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setSelectedMenu("my orders")}>my orders</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setSelectedMenu("offers")}>offers</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setSelectedMenu("Settings")}>Settings</button></li>
                    <li><button className="p-4 border-b hover:bg-gray-300 cursor-pointer w-full text-left" onClick={() => setSelectedMenu("Help")}>Help</button></li>
                </ul>
            </div>
            <div className="w-full h-screen bg-white">
                {selectedMenu}
            </div>
        </div>    
    ); 
}