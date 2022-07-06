import Header from "./components/Header"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    <footer>
      <FacebookIcon className="shop" fontSize="large"/>
      <InstagramIcon className="shop" fontSize="large"/>
    </footer>
    </div>
  );
}

export default App;
