import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import dashboard from "../../assets/dashboard.png";
const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden p-5">
        <Header />
        <main className="flex-grow">
          {/* Your main content goes here */}
          <img className="w-full" src={dashboard} alt="" />
        </main>
      </div>
    </div>

    // <div className="flex flex-col lg:flex-row h-screen">
    //   {/* Sidebar */}
    //   <Sidebar />

    //   {/* Main Content */}
    //   <div className="flex flex-col flex-grow">
    //     {/* Header */}
    //     <Header />

    //     {/* Main Content Area */}
    //     <main className="flex-grow">
    //       {/* Your main content goes here */}
    //       <img className="w-full" src={dashboard} alt="" />
    //     </main>
    //   </div>
    // </div>
  );
};

export default Dashboard;
