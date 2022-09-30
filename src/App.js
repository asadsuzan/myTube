import { Route, Routes } from "react-router-dom";
import Feeds from "./components/Feeds";
import NavBar from "./components/NavBar";


function App() {
    
 

  return (
   <>
    <NavBar/>
     <Routes>
      <Route path="/" element={<Feeds/>}/>
     </Routes>
   </>
  );
}

export default App;
