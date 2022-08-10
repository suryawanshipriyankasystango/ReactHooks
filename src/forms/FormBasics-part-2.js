
import React, { useState, useRef } from "react";

const FormBasicsPart2 = () => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    const [formArray, setFormArray] = useState([]);

    const firstName = useRef("");
    const lastName = useRef("");
    const email = useRef("");

    const myContainer = useRef();
    console.log(myContainer.current);

    const changeBackground = () => {
        myContainer.current.style.backgroundColor = "red";
      };

    const handleForm = (e) => {
        e.preventDefault();
        const users = { 
            fName: firstName.current.value,
            lName: lastName.current.value, 
            emailId: email.current.value,
        };

        if (firstName.current.value && lastName.current.value && email.current.value) {
          setFormArray((prevValue) => {
            return [...prevValue, users];
          });
        } else {
          console.log("should not be blank");
        }

        firstName.current.value = ""
        lastName.current.value = ""
        email.current.value = ""

      };
        console.log(formArray)
      return ( 
        <>
            <h1>React Form Basic</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input
                        ref={firstName}
                        
                        id="firstName"
                        name="firstName"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">lastName</label>
                        <input
                            ref={lastName}
                            
                            id="lastName"
                            name="lastName"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                            ref={email}
                            
                            id="email"
                            name="email"
                            type="text"
                        />
                    </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>

            <div ref={myContainer}>my div</div>
            <button type="button" onClick={changeBackground}>
                change background
            </button>
        </>
      )
    }

export default FormBasicsPart2