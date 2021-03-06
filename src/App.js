import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Admin from './Pages/Dashboard/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProducts from './Pages/Dashboard/AddProducts';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import NotFound from './Pages/Shared/NotFound';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}></Route>
      <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
      <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
      <Route path='payment/:id' element={<Payment></Payment>}></Route>
      <Route path='addreview' element={<AddReview></AddReview>}></Route>
      <Route index element={<MyProfile></MyProfile>}></Route>
      <Route path='makeAdmin' element={<RequireAdmin><Admin></Admin></RequireAdmin>}></Route>
      <Route path='addProducts' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
      <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
      <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
      </Route>
  
      <Route path='blog' element={<Blog></Blog>}></Route>
      <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path="signup" element={<SignUp/>} />
      <Route path="about" element={<About />} />
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
