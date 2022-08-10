import React, { useState,useEffect } from 'react'

const UseEffectBasics = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    // console.log(useEffect)

    useEffect(()=> {
        //inside useEffect there is also one callback function
        // whehever the component is render the useEffect is call
        console.log("useEffect called1")
        if(age>=1){
            console.log(age)
        }
        if(salary>=1){
            console.log(age)
        }
        //the value which we want to update can put in the dependency array so the useEffect call.

    }, [age]) // by this dependency array square bracket the useEffect is call on the initial rander

    // useState simply preserve the values between the renders and when it is tregered or change any state than the component is rendered.

    useEffect(() => {
        console.log("useeffect called2");
        if (salary >= 1) {
          console.log(salary);
        }
      }, [salary]);

    console.log("component render")
    
  return (
    <>
      <div className="center">
        <h1>{age}</h1>
        <button className="btn" onClick={() => setAge(age + 1)}>
          add Age
        </button>

        <h1>{salary}</h1>
        <button className="btn" onClick={() => setSalary(salary + 10)}>
          add salary
        </button>
      </div>
    </>
  )
}

export default UseEffectBasics