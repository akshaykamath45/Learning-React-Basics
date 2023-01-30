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
// import React from "react";
// import ReactDOM from "react-dom";
// //Directly using JSX

// //div/section/article fragment
// //className instead of class
// //close every element
// //do not create div soup,Don't keep on writing div,use articles/section 

// // const Greeting=() =>{
// //     return(
// //      <>
// //         <div onClick=" " className=" ">
// //             <div>
// //                 <h2>Hello People!</h2>
// //         </div>
            
// //         </div>
// //      </>
// //     )
// // };

// //Self Closing-->Creating Multiple Components
// const Greeting=() =>{
//     return(
//      <div>
//         <Person></Person>
//         <Message/>
      
//      </div>
//     )
// };

// const Person = () => <h2>Akshay Kamath</h2>
// const Message =() => <p>This is my message</p>
// ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom/client";//Imprtant to use Client while using creatRoot method instead of Direct Render.
// import "./index.css"

// const Booklist=()=>{
//     return(
//         <section className="bookList">
//             <Book></Book>
//             <Book></Book>
//         </section>
//     );
// };
// const Book =()=>{
//     return(
//         <article className="book">
//             <Image></Image>
//             <Author></Author>
//             <BookName></BookName>
//         </article>
//     );
// };
// const Image =()=>{
//     return(
//         <img src="https://m.media-amazon.com/images/I/41W-o6xu2bL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="book"></img>
//     );
// };
// // const Author=()=>{
// //     return( 
// //     <h2>Darius Foroux</h2>
// //     );
   
// // };

// //Another Option-->Arrow Function Automatically Includes Return,No need to Return.

// //JSX CSS
// // -->Use 2 Curly Braces-->1 for JSX,1 for CSS Propertires
// const Author=()=><h2 style={{color :'#671d04',fontsize : "0.75rem"}}>Darius Foroux</h2>
// const BookName=()=>{
//     return(
//     <h1>Do It Today</h1>
//     );
// };
// ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>);



// import React from "react";
// import ReactDOM from "react-dom/client";//Imprtant to use Client while using creatRoot method instead of Direct Render.
// import "./index.css"

// function Booklist(){
//     return(
//         <section className="bookList">
//             <Book></Book>
//         </section>
//     );
// }

// const author= "Paulo Coelho";
// const Book=()=>{
//     const title="The Alchemist";
//     return(
//         <article className="book">
//             <img src="https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg" alt=""></img>
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//             <h2>{author.toUpperCase()}</h2>
//             <h2>{6+3}</h2>
//         </article>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>);

//REACT PROPS
// import React from "react";
// import ReactDOM from "react-dom/client";//Imprtant to use Client while using creatRoot method instead of Direct Render.
// import "./index.css"

// const author="Paul Coelho";
// const title="The Alchemist";

// const img="https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg"

// function Booklist(){
//     return(
//         <section className="bookList">
//             <Book price="299" sale="76%" date="31st January" number={22}></Book>
//             <Book price="499"  sale="24%" number="22"></Book>
//         </section>
//     );
// }

// const Book=(props)=>{
//     return(
//         <article className="book">
//             <img src={img} alt=" "></img>
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//             <h1>Date of Publishment : {props.date}</h1>
//             <h1>Sale :{props.sale}</h1>
//             <h2>Price : {props.price}</h2>
//             <h2>Number : {props.number}</h2>
          
//         </article>
//     );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>);

// import React, { Children } from "react";
// import ReactDOM from "react-dom/client";//Imprtant to use Client while using creatRoot method instead of Direct Render.
// import "./index.css"

// //Using Objects
// const firstBook={
//     img:" https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
//     title :"The Alchemist",
//     author: "Paulo Coelho",
// }
// const secondBook={
//     img:"https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY218_.jpg",
//     title :"The Monk Who Sold His Ferrari",
//     author: "Robin Sharma",
// }

// function Booklist(){
//     return (
//     <section className="bookList">
//      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
//         <p>Lorem20</p>
//      </Book>
//      <Book  img={secondBook.img} title={secondBook.title} author={secondBook.author}></Book>
//     </section>
//     );
// }
// const Book=({img,title,author,children})=> //const Book=({img,title,author})=>  -->Another way of Using Props
// {
//     // const {img,title,author}=props;-->Another Way of Directly Using Props
//     // console.log(props);
//     return (
//     <article className="book">
//     <img src={img}></img>
//     <h1>{title}</h1>
//     <h2>{author}</h2>
//     <h1>{children}</h1>
//     </article>
//     );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>);

//Simple List

import React, { Children } from "react";
import ReactDOM from "react-dom/client";//Imprtant to use Client while using creatRoot method instead of Direct Render.
import "./index.css";

// const name=["john","susan","peter"];//Array with Name
// const newNames=name.map((name)=>{
//     return <h1>{name}</h1>
// });
// function Booklist(){
//     return<section className="booklist">{newNames}</section>
// }

//To make them unique,we can provide ID with Object Attributes.
const books=[
    {   
        id:1,
        img:" https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
        title :"The Alchemist",
        author: "Paulo Coelho",
    },
    {
        id:2,
        img:"https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY218_.jpg",
        title :"The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
    },
    {
        id:3,
        img:"https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UY218_.jpg",
        title:"The Blue Umbrella",
        author:"Ruskin Bond",
    },
];
function Booklist(){
    return(
        <section className="bookList">
            {books.map((book) => {
                return <Book book={book}></Book>//No need to write all the props again,props.img,props.title,props.author,Instead use -->book={book}-->while using map function.
                // return <Book key={book.id}{...book}></Book> -->Can use this for unique key,but remember to change props.book to jus props in the component.
            })}
        </section>
    )
}
const Book = (props) =>{
    const {img,title,author}=props.book;//Using the Props here from mapped objects
    return(
        <article className="book">
            <img src={img} alt=""></img>
            <h1>{title}</h1>
            <h2>{author}</h2>
        </article> 
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>);