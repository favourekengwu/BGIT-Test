import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import MainLayout from "./layout/MainLayout";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
// npm i bootstrap@5.3.0-alpha3 - used to install bootstrap

function App(){
  return (
      <Routes>
    <Route path="" element={<MainLayout/>}> 
      <Route index element={<Home/>}/> 
      <Route path="about" element={<About/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="shop/:product" element={<Product/>} />
    </Route>
    
  </Routes>
  
  );
}

export default App;





// Git push test 

// import logo from './logo.svg';
// import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

