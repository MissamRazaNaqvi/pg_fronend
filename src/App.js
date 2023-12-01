import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import './App.css';
import Student from "./components/student/student";
import Contact from "./components/contact/contact";
import Navbar from './components/navbar/navbar'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Student />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
