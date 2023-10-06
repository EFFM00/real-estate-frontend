import Catalogue from "./pages/Catalogue/Catalogue"
import Login from "./pages/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Catalogue/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
