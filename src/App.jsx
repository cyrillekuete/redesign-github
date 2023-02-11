import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import RepoStats from "./components/RepoStats";
import { RepoNav } from "./components/RepoNav";

function App() {
  return (
    <div className="App text-gray-200 text-sm bg-[#0d1117]">
      <Navbar />
      <RepoStats />
      <RepoNav />
    </div>
  );
}

export default App;
