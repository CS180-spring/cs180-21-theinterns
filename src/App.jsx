import {Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Reference from "./components/Reference";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Reference" element={<Reference />}/>
      </Routes>
    </div>
  );
};

export default App;
