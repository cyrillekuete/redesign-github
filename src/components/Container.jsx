import React from "react";

import FileExplorerContainer from "./FileExplorerContainer";

import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <div className="bg-[#0d1117] container mx-auto my-8 px-4 flex">
      <FileExplorerContainer />

      <Sidebar />
      
    </div>
  );
};

export default Container;
