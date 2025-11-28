import { useState } from "react";
import "./App.css";
import ColorBox from "./Components/ColorBox";
import Form from "./Components/Form";
import PostComponent from "./Components/PostComponent";
import Features from "./Components/features";


//Question 1 starts from here
function App() {
  let categories = [
    { text: "Electronics", color: "red" },
    { text: "Clothing", color: "blue" },
    { text: "Home Decor", color: "yellow" },
  ];

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>Questions Solved From Here</h1>
        <p>
          --------------------------------------------------------------------------------------
        </p>

        <h2>Question 1</h2>
        {categories.map((item, index) => (
          <ColorBox key={index} text={item.text} color={item.color} />
        ))}

        {/* Question 2 starts from here */}
        <h2>Question 2</h2>
        <Form />

        {/* Question 3 starts from here */}
        <h2>Question 3</h2>
        <PostComponent />

        
        {/* Question 4 starts from here */}
        <h2>Question 4</h2>
        <Features />
      </div>
    </div>
  );
}



//Question 2 starts from here


export default App;
