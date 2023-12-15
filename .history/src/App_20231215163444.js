import Pages from "./pages/Pages";
import Category from "./components/Ctegory";
import { BrowserRouter} from "react-router-dom";
import { Nav,Linkk } from "./style/styles";
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
      <div style={{width: 7879, height: 2727, position: 'relative', background: 'white'}}>
        <img style={{width: 737, height: 757, left: 3571, top: 547, position: 'absolute'}} src="https://via.placeholder.com/737x757" />
        <div style={{width: 2008, height: 374, left: 351, top: 1495, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 200, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>تهران ُ جنت آباد مرکزی</div>
        <div style={{width: 446, height: 319, left: 3494, top: 1653, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
        <div style={{width: 446, height: 319, left: 3940, top: 1653, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
        <div style={{width: 499, height: 437, left: 6111, top: 873, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 1690, height: 319, left: 5488, top: 1653, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 200, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>تلفن : ۰۲۶۳۶۳۰۴۱۶۶<br/></div>
        <div style={{left: 2979, top: 2321, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 200, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word'}}>کترینگ سیرین و ریحان</div>
      </div>
      </BrowserRouter>
      </div>
  );
}

export default App;







