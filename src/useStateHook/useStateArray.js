// import React, { useState } from 'react'
import React from 'react'
import { list } from '../recipelist';

const UseStateArray = () => {
 
    const[value, setValue]=React.useState(list);
    // console.log(value)

    const removeItem = (id) => {
        let newArray = value.filter((mylist) => {
        //   return mylist.id === id; //   
          return mylist.id !== id; //   1
        });
        // setValue(newArray);
        // setValue((oldValue) => {
        //   let newArray = oldValue.filter((mylist) => {
        //     return mylist.id !== id; //   1
        //   });
        //   return newArray;
        // });
        // console.log(newArray)
        setValue(newArray)
      };

    const removeAll = () => {
        setValue([]);
      };

  return (
    <>
        {
            value.map((recipe)=>{
                const { id, imageUrl, heading, price } = recipe;
                return(
                    <div key={id} className="col">
                        <img src={imageUrl} alt="" />
                        <h2>{heading}</h2>
                        <p>{price}</p>
                        <button onClick={() => removeItem(id)} className='removeOne'>X</button>
                    </div>
                );
            })
        }
        {/* <button className="removeAll" onClick={()=>setValue([])}>
        remove all
      </button> */}
      <button className="removeAll" onClick={removeAll}>
        remove all
      </button>
    </>
  )
}

export default UseStateArray