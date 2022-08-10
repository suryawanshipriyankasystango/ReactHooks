import React, { useEffect, useState } from 'react'

const ConditionalRenderFetchAPI = () => {

    const API = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([])

    const getData = () => {
        fetch(API)
        .then((res)=>{
            // console.log(res); 
            // return res.json();
            if(res.ok){
            // if(res.status >=200 && res.status>=299){
                return res.json()
            }else{
                setLoading(false)
                setError(true)
                throw Error ("Product not found");
                // throw Error (res.statusText);
            }
        })
        .then((productsData)=> {
            setLoading(false)
            setProducts(productsData);
        })
        .catch((error) => console.log(error));
    }

    useEffect(()=>{
        getData();
    }, [])

    if(loading){
        return<h2>Loading...</h2>;
    }
    if(error){
        return<h2>Error...</h2>;
    }
    {

        const p = false;
  return (
    <>

        {
            p?
            products.map((product)=>{
                //we can do destructure here
                const {id,title} = product;
                return(
                    <div key={id}>
                        <h4 className='mb-4'>{title}</h4>
                    </div>
                )
            })
            :
            <h1>Not found</h1>
        }
    </>
  )
}
}


export default ConditionalRenderFetchAPI