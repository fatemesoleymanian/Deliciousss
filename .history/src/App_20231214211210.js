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
// const Logo = styled(Link)`
// text-decoration: none;
// font-size: 1.5rem;
// font-weight: 400;
// font-family: 'Lobster Two', cursive;
// `;
export default App;
