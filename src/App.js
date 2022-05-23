import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='products' element={<Products></Products>}></Route>
      <Route path='blog' element={<Blog></Blog>}></Route>
      <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path="signup" element={<SignUp/>} />
      <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
