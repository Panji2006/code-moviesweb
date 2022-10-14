// import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Superhero from './components/Superhero';
import Trending from './components/Trending';
import Footer from './components/Footer';
import "./style/landingPage.css";
// import { Card, Container, Row, Col, Image } from "react-bootstrap";
// import jokerImage from "./assets/images/trending/joker.jpg"
// import duneImage from "./assets/images/trending/dune.jpg"
// import everythingImage from "./assets/images/trending/everything.jpg"
// import infiniteImage from "./assets/images/trending/infinite.jpg"
// import lightyearImage from "./assets/images/trending/lightyear.jpg"
// import morbiusImage from "./assets/images/trending/morbius.jpg"

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
