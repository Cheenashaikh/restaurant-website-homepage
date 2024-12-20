// import './App.css';
// import Header from './components/header';

// import Service from './pages/ServicesPage';


// import Policies from './pages/Policiese';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>

//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<AboutUs />} />

//           <Route path="/service" element={<Service />} />
//           <Route path="/polices" element={<Policies />} />


//         </Routes>

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from "react";
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './pages/ServicesPage';
import Policies from './pages/PoliciesPage'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/polices" element={<Policies />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

