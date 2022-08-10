import React from 'react';
import './App.css';
import UseStateBasics from "./useStateHook/useStateBasics.js"
import UseStateArray from './useStateHook/useStateArray';
import UseStateObject from "./useStateHook/UseStateObject"
import UseStateNumber from "./useStateHook/UseStateNumber"
import UseEffectBasics from "./useEffectHook/UseEffectBasics"
import CleanupFunction from "./useEffectHook/CleanupFunction"
import UseEffectFetchAPI from "./useEffectHook/UseEffectFetchAPI"
import ConditionalRenderingBasics from "./useEffectHook/ConditionalRenderingBasics"
import ConditionalRenderFetchAPI from "./useEffectHook/ConditionalRenderFetchAPI"
import ShortCircuit from "./useEffectHook/ShortCircuit"
import FormBasics from "./forms/FormBasics"
import FormBasicsPart2 from "./forms/FormBasics-part-2"
import ReactHookForm from "./forms/ReactHookForm"
import ReactHookFormPart2 from "./forms/ReactHookFormPart2"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./reactRouter/Home";
import About from "./reactRouter/About";
import Product from "./reactRouter/Product";
import Contact from "./reactRouter/Contact";
import PageNotFound from "./reactRouter/PageNotFound";
import Nav from "./reactRouter/Nav";
import ProductDetail from "./reactRouter/ProductDetail";
import ProductAPI from "./reactRouter/ProductAPI";
import ProductDetailAPI from "./reactRouter/ProductDetailAPI";
// import Usereducer from "./useReducer-hook/Usereducer";
// import LoginForm from "./useReducer-hook/LoginForm";


function App() {
  return (
    <>
    <Router>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/productdetail/:id" children={<ProductDetail />} />
          <Route path="/productapi" component={ProductAPI} />
          <Route path="/productdetailapi/:id" children={<ProductDetailAPI />} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

      {/* <UseStateBasics></UseStateBasics>
      <br></br>
      <UseStateArray></UseStateArray>
      <br></br>
      <UseStateObject></UseStateObject>
      <br></br>
      <UseStateNumber></UseStateNumber> */}
      {/* <br></br>
      <UseEffectBasics></UseEffectBasics>
      <br></br>
      <CleanupFunction></CleanupFunction>
      <br></br> */}
      {/* <UseEffectFetchAPI></UseEffectFetchAPI> */}
      <br></br>
      {/* <ConditionalRenderingBasics></ConditionalRenderingBasics> */}
      <br></br>
      {/* <ConditionalRenderFetchAPI></ConditionalRenderFetchAPI>
      <br></br>
      <ShortCircuit></ShortCircuit> */}
      <br></br>
      {/* <FormBasics></FormBasics> */}
      <br></br>
      {/* <FormBasicsPart2></FormBasicsPart2> */}
      {/* <ReactHookForm></ReactHookForm> */}
      {/* <ReactHookFormPart2></ReactHookFormPart2> */}

    </>
  );
}

export default App;
