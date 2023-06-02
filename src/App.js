import { HashRouter as Router, Route, Routes} from "react-router-dom";
// import { HashLink } from "react-router-hash-link";


//--------------------Components Imports------------------------------------

import Header from "./Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import About from "./components/About";
// import Services from "./components/Services";

//--------------------Components Imports------------------------------------

//----------------Styling Imports-----------------------------------------------

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
// import "./styles/about.scss";
// import "./styles/services.scss";
//----------------Styling Imports-----------------------------------------------



function App() {
  return (
     <Router>
      <Header/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      {/* <Route path="/services" element={<Services/>}/> */}
     </Routes>
     <Footer/>
     </Router>
  );
}

export default App;
