import {useEffect,useState} from "react";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import './App.css';

function App() {


  return (
    <section>
    
    <div className="App">
      <h1 style={{ color: "white" }}>Pixel Patients</h1>
      
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
      
        <FileUpload/>
        <Display/>
      
    </div>
    </section>
  );
}

export default App;
