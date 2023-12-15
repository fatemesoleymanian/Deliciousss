import Pages from "./pages/Pages";
import Category from "./components/Ctegory";
import { BrowserRouter, Link} from "react-router-dom";
import { Nav } from "./style/styles";
import { styled } from 'styled-components';
const Logo = require("./logo//1702448783699-transformed.jpeg")

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Link href="/">
        <img src={Logo} alt="reyhan_&_shirin" width={"160px"} height={"160px"} />
        </Link>
      </Nav>
    <Category />
      <Pages />
      </BrowserRouter>
      </div>
  );
}
const Link = styled.a`
text-decoration:none;
`
export default App;
