import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoMastercard } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { MdCurrencyExchange, MdOutlinePayment } from "react-icons/md";
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
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleItemHover = (itemId: number | null) => {
    setActiveItemId(itemId);
  };
  return (
    // <aside className="h-screen sticky top-0 bg-gray-800 text-white w-full lg:w-64 flex-shrink-0">
    <aside
      className={`h-screen shadow-xl font-gilroy sticky top-0 transition-all bg-white lg:w-[300px] text-gray-900`}
    >
      {/* Sidebar content */}
      <div className="p-4 flex flex-col items-center">
        <div className="space-y-12">
          <div className="border-b-[1px] pb-7 flex items-center justify-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <BiLogoMastercard className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">AEAT</h2>
          </div>

          {/* Sidebar links */}
          <ul className="space-y-8">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={() => handleItemHover(null)}
                className="flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="group-hover:text-primary transition duration-200 group-hover:font-[800] text-xl text-textPrimary">
                    {item.icon}
                  </div>
                  <Link
                    to={item.to}
                    className="group-hover:text-primary transition duration-200 group-hover:font-[800] text-textPrimary text-[18px]"
                  >
                    {item.text}
                  </Link>
                </div>

                <div
                  className={`bg-primary transition duration-500 ${
                    item.id === activeItemId
                      ? "opacity-1 visible"
                      : "opacity-0 invisible"
                  } w-3 h-3 rounded-full transition duration-200 group-hover:font-[800] text-xl`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
