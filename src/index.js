// import React from "react";
// import ReactDOM from "react-dom";

// // capitalize the first letter of your component's name.

// function Greeting(){
//     let name="Akshay";//JSX-->Using HTML in JavaScript--->return<h4>This is {name} and this is my first component.</h4>
//     return <h4>This is Akshay and this is my first component.</h4>
// }

// ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom";

// const Greeting=() =>{
//     // return React.createElement("h1",{},'Hello World');What ever is included after {} will be included in that div
//     return React.createElement("div",{},React.createElement("h1",{},"hello peoples"));
// };
import React from "react";
import ReactDOM from "react-dom";
//Directly using JSX

//div/section/article fragment
//className instead of class
//close every element
//do not create div soup,Don't keep on writing div,use articles/section 

// const Greeting=() =>{
//     return(
//      <>
//         <div onClick=" " className=" ">
//             <div>
//                 <h2>Hello People!</h2>
//         </div>
            
//         </div>
//      </>
//     )
// };

//Self Closing-->Creating Multiple Components
const Greeting=() =>{
    return(
     <div>
        <Person></Person>
        <Message/>
      
     </div>
    )
};

const Person = () => <h2>Akshay Kamath</h2>
const Message =() => <p>This is my message</p>
ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));