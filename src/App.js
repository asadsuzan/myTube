import { Route, Routes } from "react-router-dom";
import ChenelDetails from "./components/ChenelDetails";
import Feeds from "./components/Feeds";
import NavBar from "./components/NavBar";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";


function App() {

  return (
   <>
    <NavBar/>
     <Routes>
      <Route path="/" exact  element={<Feeds/>}/>
      <Route path="chenel/:id" element={<ChenelDetails/>}/>
      <Route path="video/:id" element={<VideoDetails/>}/>
      <Route path="search/:searchFor" element={<SearchFeed/>}/>
     </Routes> 
 
   </>
  );
}

export default App;
