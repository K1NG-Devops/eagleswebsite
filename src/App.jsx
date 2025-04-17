import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Layout from "./components/Layout";
import './App.css'
import youngEaglesLogo from './assets/youngeagles-logo.png' // Import your logo

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App