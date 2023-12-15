import Pages from "./pages/Pages";
import Category from "./components/Ctegory";
import { BrowserRouter} from "react-router-dom";
import { Nav,Linkk, Footer } from "./style/styles";
const Logo = require("./logo/1702448783699-transformed.jpeg")

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Linkk href="/">
       <img src={Logo} alt="reyhan_&_shirin" width={"160px"} height={"160px"} />
       <h2>کترینگ شیرین و ریحان</h2>
        </Linkk>
      </Nav>
    <Category />
      <Pages />
      <Footer>

        <div className="footer-left">
          <h3>Company<span>logo</span></h3>
        </div>

        <div className="footer-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>
        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>

        </div>
      </Footer>
 
      </BrowserRouter>
      </div>
  );
}

export default App;







