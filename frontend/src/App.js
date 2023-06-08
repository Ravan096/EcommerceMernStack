import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import MetaData from "./components/layout/MetaData"

function App() {
  return (
    <Router>
      <MetaData title={"Home"}/>
      <Header/>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
