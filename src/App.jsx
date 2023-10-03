// import React from "react";
import List from "./components/List";
import data from './components/data/data.json'
import "./App.css"

export default function App() {
 
console.log(data)
  return <List list={data} />;
}