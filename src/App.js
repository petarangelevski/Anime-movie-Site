import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePage from "./components/SinglePage";
import Episodes from "./components/Episodes";
import Header from "./components/Header";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import HomePage from "./components/HomePage";
import Genres from "./components/genres/Genres";
import Footer from "./components/Footer";
import SingleGenre from "./components/SingleGenre";
import Characters from "./components/Characters";
import Podheader from "./components/Podheader";
import './App.css'

function App() {
  // const [genreList, setGenreList] = useState([]);


  // const [selectedCategory, setSelectedCategory] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("https://api.jikan.moe/v4/anime");
  //     setGenreList(result.data.data);
  //   };
  //   fetchData();
  // }, []);

  // function getFilteredList() {
  //   if (!selectedCategory) {
  //     return genreList;
  //   }
  //   return genreList.filter((item) => item.type === selectedCategory);
  // }
  // {
  //   // genreList.map(item => {
  //   //   console.log(item.type)
  //   // })
  // }



  // var filteredList = useMemo(getFilteredList, [selectedCategory, genreList]);

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // }


  return (
    <BrowserRouter>
      <div className="App">
        <div className="headers">
        <Podheader/>
        <Header handleCategoryChange={handleCategoryChange} />
        </div>
      <Routes>
        <Route path="/" element={<><HomePage/></>}/>
        <Route path='/:page' element={<><Home/></>}/>
        <Route exact path='/:title/:id' element={<><SinglePage/></>} />
        <Route exact path='/episode/:title/:id' element={<><Episodes/></>} />
        <Route exact path='/genres/:name/:id' element={<><SingleGenre/></>} />
        <Route exact path='/characters/:name/:id' element={<><Characters/></>} />
      </Routes>
      
      <div className="footer">
      <Footer/>
      </div>
      </div>
     
    
    </BrowserRouter>
    
  );
}



const handleCategoryChange = (event) => {
  
}



export default App;
