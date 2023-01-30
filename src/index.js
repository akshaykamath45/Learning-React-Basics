// import React from "react";
// import ReactDOM from "react-dom";

// // capitalize the first letter of your component's name.

// function Greeting(){
//     let name="Akshay";//JSX-->Using HTML in JavaScript--->return<h4>This is {name} and this is my first component.</h4>
//     return <h4>This is Akshay and this is my first component.</h4>
// }

// ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";

const Greeting=() =>{
    // return React.createElement("h1",{},'Hello World');
    return React.createElement("div",{},React.createElement("h1",{},"hello peoples"))
}

ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));