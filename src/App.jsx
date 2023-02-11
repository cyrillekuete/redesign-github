

import "./App.css";
import Navbar from "./components/Navbar";
import RepoStats from "./components/RepoStats";
import { RepoNav } from "./components/RepoNav";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App text-gray-200 text-sm bg-[#0d1117]">
      <Navbar />
      <RepoStats />
      <RepoNav />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
