import { Route, Routes } from "react-router-dom";
import ChenelDetails from "./components/ChenelDetails";
import Feeds from "./components/Feeds";
import NavBar from "./components/NavBar";
import SearchFeed from "./components/SearchFeed";


function App() {
    
 

  return (
   <>
    <NavBar/>
     <Routes>
      <Route path="/" element={<Feeds/>}/>
      <Route path="/chenel/:id" element={<ChenelDetails/>}/>
      <Route path="/search/:searchFor" element={<SearchFeed/>}/>
     </Routes>
   </>
  );
}

export default App;
