import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
 ),
 React.createElement(
    "div",
    { id: "child3" },
    [React.createElement("h1", {}, "I am an h3 tag"), 
     React.createElement("h1", {}, "I am an h4 tag")]
 )
);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// const heading =  React.createElement("h1", {
//     id: "heading"
// }, "Hello World from React!");
//    const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(heading);