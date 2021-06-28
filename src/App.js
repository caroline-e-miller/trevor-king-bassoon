import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Recordings from "./pages/Recordings/Recordings";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recordings" component={Recordings} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;