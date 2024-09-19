import React from "react";
import Home from "./home/Home";
import {Route,Routes} from 'react-router-dom';
import Courses from "./courses/Courses";
import Signup from "./compents/Signup";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/Course" element = {<Courses />}/>
        <Route path ="/Signup" element = {<Signup />}/>
        
      </Routes>

      </div>
    
    </>
  );
}
export default App