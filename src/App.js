import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductsProvider } from "./ContextProviders/WebshopContext";
import { TopStyleNavbar } from "./Components/Views/TopStyleNavbar";
import { Main } from "./Components/Navigation/Main";

function App() {
  return (
    <ProductsProvider>
      <TopStyleNavbar />
      <Main />
    </ProductsProvider>
  );
}

export default App;
