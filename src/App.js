import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API;
  // const apikey = '8edbac52dff04d2891bd44f5ed5f323c'
  return (
      <div>
        <Router>
          <Navbar/>
            <Routes>
              <Route strict exact path="/" element={<News key={"h"} apikey= {apikey} pageSize={pageSize} country="in" category="general"/>}></Route>
              <Route strict exact path="business" element={<News  key={"bs"} apikey= {apikey} pageSize={pageSize} country="in" category="business"/>}></Route>
              <Route strict exact path="entertainment" element={<News key={"et"} apikey= {apikey} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
              <Route strict exact path="general" element={<News key={"gl"} apikey= {apikey} pageSize={pageSize} country="in" category="general"/>}></Route>
              <Route strict exact path="health" element={<News key={"hh"} apikey= {apikey} pageSize={pageSize} country="in" category="health"/>}></Route>
              <Route strict exact path="science" element={<News key={"se"} apikey= {apikey} pageSize={pageSize} country="in" category="science"/>}></Route>
              <Route strict exact path="sports" element={<News key={"ss"} apikey= {apikey} pageSize={pageSize} country="in" category="sports"/>}></Route>
              <Route strict exact path="technology" element={<News key={"ty"} apikey= {apikey} pageSize={pageSize} country="in" category="technology"/>}></Route>
           </Routes>         
        </Router>
      </div>
    )
}

