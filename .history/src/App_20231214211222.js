import Pages from "./pages/Pages";
import Category from "./components/Ctegory";
import { BrowserRouter, Link} from "react-router-dom";
import Search from "./components/Search";
import { Nav } from "./style/styles";
import  Logo  from "./logo/1702448783699-transformed.jpeg"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav >
        <Logo />
      </Nav>
      <Search />
    <Category />
      <Pages />
      </BrowserRouter>
      </div>
  );
}
export default App;
