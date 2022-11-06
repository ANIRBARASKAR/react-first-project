// import Header from "./components/Header";
// import "./style/App.css"
// import "./style/Header.css"
// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Home from "./components/Home";
// import Aboute from "./components/Aboute";
// import Contact from "./components/Contact";
// import Product from "./components/Product";
// import PageNotFound from "./components/PageNotFound";

// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//      <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<Aboute/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/product/:id" element={<Product/>} />
//         <Route path="*" element={<PageNotFound/>} />
//       </Routes>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footetr from './components/Footetr'
import Header from './components/Header'
import Home from './components/Home'


import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Footer.scss"
import "./styles/Home.scss"
import "./styles/Contact.scss"
import "./styles/Services.scss"
import "./styles/mediaQuery.scss"
import Contact from './components/Contact'
import Services from './components/Services'
export default function App() {
  return (
<>


<BrowserRouter>
<Header/>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Services/>} />
  </Routes>
  <Footetr/>
</BrowserRouter>


</>  )
}
