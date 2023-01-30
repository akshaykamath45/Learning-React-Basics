import React from "react";
import ReactDOM from "react-dom";

// capitalize the first letter of your component's name.

function Greeting(){
    return <h4>This is Akshay and this is my first component.</h4>
}

ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));