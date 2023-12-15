import Pages from "./pages/Pages";
import Category from "./components/Ctegory";
import { BrowserRouter, Link} from "react-router-dom";
import { Nav } from "./style/styles";
const Logo = require("./logo//1702448783699-transformed.jpeg")

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav >
        <img src={Logo} alt="reyhan_&_shirin" width={"40%"} height={"40%"} />
      </Nav>
    <Category />
      <Pages />
      </BrowserRouter>
      </div>
  );
}
export default App;
