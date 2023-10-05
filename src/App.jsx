import { CatalogueProvider } from "./context/CatalogueProvider"
import Catalogue from "./pages/Catalogue/Catalogue"
import Login from "./pages/Login/Login"

function App() {

  return (
    <CatalogueProvider>
      <Login/>
      <Catalogue/>
    </CatalogueProvider>
  )
}

export default App
