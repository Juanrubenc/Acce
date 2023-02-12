import {Routes, Route} from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Travel from "./components/Travel";
import Business from "./components/Business";
import Food from "./components/Food";
import Work from "./components/Work";
import EstilodeVida from "./components/EstilodeVida";
import AppHeader from "./components/AppHeader";



function App() {
  return (
    <div className="">
      <AppHeader />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/business" element={<Business />} />
        <Route path="/estilodevida" element={<EstilodeVida />} />
        <Route path="/food" element={<Food />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
