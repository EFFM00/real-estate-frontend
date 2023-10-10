import Catalogue from "./pages/Catalogue/Catalogue"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App