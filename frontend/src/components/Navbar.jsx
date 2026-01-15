import { useState } from "react";
import { Home, Search, MessageCircle, Play, Bell, User, Heart } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { icon: <Home />, label: "Home" },
    { icon: <MessageCircle />, label: "Messages" },
    { icon: <Play />, label: "Reels" },
    { icon: <Bell />, label: "Notifications" },
    { icon: <Heart />, label: "Likes" },
  ];

  return (
    <>
      <nav>
        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-[60px] bg-white border-r border-gray-200 justify-between z-50 pt-20 pb-10">
          <ul className="flex flex-col gap-8 w-full items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="h-[50px] w-full flex justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110  rounded-lg group"
                title={item.label}
              >
                <div className="text-black group-hover:text-gray-700">
                  {item.icon}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-between p-3 md:hidden z-50">
          <ul className="flex flex-row text-sm w-full justify-around items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer active:scale-95 transition-transform"
              >
                <div className="text-black">
                  {item.icon}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
