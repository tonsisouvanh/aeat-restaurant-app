import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoMastercard } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { MdCurrencyExchange,MdOutlinePayment } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const sidebarItems = [
  {
    id: 0,
    text: "Dashboard",
    to: "#",
    icon: <BsGrid1X2 />,
  },
  {
    id: 1,
    text: "Exchang",
    to: "#",
    icon: <MdCurrencyExchange />,
  },
  {
    id: 2,
    text: "Library",
    to: "#",
    icon: <VscLibrary />,
  },
  {
    id: 3,
    text: "Schedules",
    to: "#",
    icon: <AiOutlineSchedule />,
  },
  {
    id: 4,
    text: "Payouts",
    to: "#",
    icon: <MdOutlinePayment />,
  },
  {
    id: 5,
    text: "Settings",
    to: "#",
    icon: <IoSettingsOutline />,
  },
];

const Sidebar = () => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemHover = (itemId) => {
    setActiveItemId(itemId);
  };
  return (
    // <aside className="h-screen sticky top-0 bg-gray-800 text-white w-full lg:w-64 flex-shrink-0">
    <aside
      className={`h-screen font-gilroy sticky top-0 transition-all bg-white lg:w-[300px] text-gray-900`}
    >
      {/* Sidebar content */}
      <div className="p-4 space-y-12">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-emerald-400 rounded-lg p-2">
            <BiLogoMastercard className="text-2xl" />
          </div>
          <h2 className="text-2xl font-bold">AEAT</h2>
        </div>

        {/* Sidebar links */}
        <ul className="mt-4 space-y-8">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleItemHover(item.id)}
              onMouseLeave={() => handleItemHover(null)}
              className="flex items-center gap-3 group"
            >
              {/* <BsGrid1X2 className="text-xl" /> */}
              <div className="group-hover:text-emerald-400 transition duration-200 group-hover:font-[800] text-xl text-[#333333]">
                {item.icon}
              </div>
              <Link
                to={item.to}
                className="group-hover:text-emerald-400 transition duration-200 group-hover:font-[800] text-[#00140E] text-[18px]"
              >
                {item.text}
              </Link>
              {item.id === activeItemId ? (
                <div className="bg-emerald-400 w-2 h-2 rounded-full transition duration-200 group-hover:font-[800] text-xl"></div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </aside>

    // <aside className="h-screen font-gilroy sticky top-0 transition-all bg-white lg:w-[300px] text-gray-900">
    //   <div className="p-4 space-y-12">
    //     {/* Sidebar header */}
    //     <div className="flex items-center justify-center gap-2">
    //       {/* Logo and title */}
    //     </div>

    //     {/* Sidebar links */}
    //     <ul className="mt-4 space-y-8">
    //       {sidebarItems.map((item) => (
    //         <li
    //           key={item.id}
    //           className={`flex items-center gap-3 group ${
    //             item.id === activeItemId ? "text-emerald-400 font-bold" : ""
    //           }`}
    //           onMouseEnter={() => handleItemHover(item.id)}
    //           onMouseLeave={() => handleItemHover(null)}
    //         >
    //           <div className="text-xl text-[#333333]">{item.icon}</div>
    //           <Link to={item.to} className="text-[#00140E] text-[18px]">
    //             {item.text}
    //           </Link>
    //           {item.id === activeItemId && (
    //             <div className="w-1 h-1 bg-emerald-400 rounded-full" />
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </aside>
  );
};

export default Sidebar;
