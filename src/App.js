import { Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from "./Pages/Blogs/Blogs";
import Home from './Pages/Home/Home';
import Login from "./Pages/Logins/Login/Login";
import SignUp from "./Pages/Logins/SignUp/SignUp";
import MyPortfolio from "./Pages/My Portfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
      <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
      <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
