import React from "react"
import {BrowserRouter} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import Home from "./component/Home"
import Add from "./component/Add"
import Update from "./component/Update"



export  default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Update/:Id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  ) 
}