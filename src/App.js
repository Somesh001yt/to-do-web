
import { Routes, Route } from "react-router-dom";
import CreatTable from "./component/CreatTable";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/" element={<CreatTable />} />
        <Route path="/taskform" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
