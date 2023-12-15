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
          <img src={Logo} alt="reyhan_&_shirin" width={"160px"} height={"160px"} />
        </div>

        <div className="footer-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span></span> تهران , جنت آباد مرکزی</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>۰۹۹۰۸۲۸۵۷۰۹</p>
          </div>
        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>درباره کترینگ شیرین و ریحان</span>
            کترینگ شیرین و ریحان به تازگی کار خود را شروع کرده است.
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







