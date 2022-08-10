import React, { useState } from 'react'

// multiple returns
// multiple returns using fetch
// short circuit evaluation
// ternary operator
// toggle component
const ConditionalRenderingBasics = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [name, setName] = useState("priyanka")

    if(loading){
        return<h2>Loading...</h2>;
    }
    if(error){
        return<h2>Error...</h2>;
    }
    {
  return <h1>{name}</h1>;
}
}

export default ConditionalRenderingBasics