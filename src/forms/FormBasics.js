import React, {useState} from 'react'

const FormBasics = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formArray, setFormArray] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const users = { fName: firstName, lName: lastName, emailId: email };
    if (firstName && lastName && email) {
      setFormArray((prevValue) => {
        return [...prevValue, users];
      });
    } else {
      console.log("should not be blank");
    }
    setFirstName("")
    setLastName("");
    setEmail("");
  };
    console.log(formArray)
  return ( 
    <>
        <h1>React Form Basic</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="firstName">firstName</label>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    name="firstName"
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="lastName">lastName</label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastName"
                        name="lastName"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        type="text"
                    />
                </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default FormBasics