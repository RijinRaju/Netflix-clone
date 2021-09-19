import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar/Navbar";
import axios,{response} from 'axios'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import "./App.css";
import{ action, comady, horror, originals }from "./Components/Urls";


function App(){

return(
<div >
 <Navbar/>
 <Banner/>
 <Rowpost title="Netflix Originals" url={originals}/>
 <Rowpost title="Action" isSmall url={action}/>
 <Rowpost title="Horror" isSmall url={horror}/>
 <Rowpost title="Comady" isSmall url={comady}/>
</div>
);
}
export default App;
 