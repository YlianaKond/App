
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Content from "./components/content";
import Content1 from "./components/content1";

function App() {
  return (
    <div> 
    <Header/>
    <Content1/>
    <Slider/>
    <Content/>
    <Footer/> 
    </div>
  );
}

export default App;
