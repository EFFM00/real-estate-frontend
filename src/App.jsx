import Catalogue from "./pages/Catalogue/Catalogue";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedLogin from "./routes/Protecteds";
import PropDetails from "./pages/PropDetails/PropDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLogin />}>
            <Route exact path="/properties" element={<Catalogue />} />
            <Route path="/properties/:propertyId" element={<PropDetails />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
