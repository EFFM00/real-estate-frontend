import Catalogue from "./pages/Catalogue/Catalogue"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App