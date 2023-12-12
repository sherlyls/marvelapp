import React, {useState} from "react";
import { Card } from "./Card"
import axios from 'axios'

export const Main = () => {
  const [url, setUrl] = useState()
  return (
    <>
      <div className="header">
        <div className="bg">
          <img src="./Images/bg.png" alt="" />
        </div>
        <div className="search-bar">
          <img src="./Images/logo.jpg" alt="" />
          <input type="search" placeholder="Search Here" className="search" />
        </div>
      </div>
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
