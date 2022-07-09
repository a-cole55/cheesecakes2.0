import Header from "./components/Header";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Order from "./pages/Order.js";
import Specials from "./pages/Specials.js";
import Contact from "./pages/Contact.js";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/specials" element={<Specials/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </div>
    <footer>
      <FacebookIcon className="shop" fontSize="large"/>
      <InstagramIcon className="shop" fontSize="large"/>
    </footer>
  </div>
  </Router>
  );
}

export default App;
