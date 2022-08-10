import React, {useState} from 'react';

const UseStateBasics = () => {
  // console.log(useState());// it is a function which return array.
  //   let text="This is old text";

  const [text, setText]=useState("this is old text")

  const changeText= () =>{
    // console.log("this is new text");
    if(text==="this is old text"){
      setText("this is new text")
    }else{
      setText("this is old text")
    }
  }

  return (
    <>
        <h1>{text}</h1>
        <button onClick={changeText}>Change</button>
    </>
  )
}

export default UseStateBasics;