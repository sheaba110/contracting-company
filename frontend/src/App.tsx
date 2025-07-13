import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Consultation from "./pages/Consultation";
import FacebookLoginButton from "./components/FacebookLoginButton";
// import Login  from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/consultation" element={<Consultation />} />
            <>
              <FacebookLoginButton />
            </>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
