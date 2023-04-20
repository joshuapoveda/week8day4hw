import data from "./data.js";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Navigation from "./components/Navigation.js";
import IndividualStock from "./pages/IndividualStock.js";

export default function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/stocks" element={<Dashboard props={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/IndividualStock/:id" element={<IndividualStock props={data}/>} />
      </Routes>

    </div>
  );
}

