import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search,setSearch]=useState("");
    const [booksData,setBooksData]=useState([]);
    const searchBook = (e) => {
        if(e.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAU5RwyC8wATZLuiFT37hHQYEJmkDlYs5s&maxResults=40')
            .then(res=>setBooksData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
          <div className="header">
              <div className="row1">
                  <h1>A room without books is like<br/> a body without a soul.</h1>
              </div>
              <div className="row2">
                  <h2>Find Your Book</h2>
                  <div className="search">
                      <input type="text" placeholder="Enter Your Book Name"
                       value={search} onChange={(e)=>setSearch(e.target.value)} 
                       onKeyPress={searchBook}/>
                      <button><i className="fas fa-search"></i></button>
                  </div>
                  <img src="./images/bg2.png" alt=""/>
              </div>
          </div>

          <div className="container">
              {
                  <Card book={booksData}/>
              }
          </div>
        </>
    )
}

export default Main;