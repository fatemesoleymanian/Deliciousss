import { motion } from "framer-motion";
import styled from "styled-components";

const Linkk = styled.a`
text-decoration:none;
`
const Nav = styled.div`
padding: 3rem 0rem;
display: flex;
border-bottom: 1px solid #e8e8e8;
justify-content: center;
align-items: center;
img{
  border-radius: 20px;
  background: #b6c454;
  box-shadow:  24px 24px 48px #9da948,
 -24px -24px 48px #cfdf60;
}
h2{
  text-align:left;
}
`;
const Wrapper = styled.div`
margin:4rem 0rem;
h3{
  text-align:right;
}
`;
const Cart = styled.div`
img{
  border-radius: 2rem;
  width:100%;
}
h4{
    text-align: right;
    padding: 1rem 1.5rem;
    display:inline-block;
    float:right;
}
h5{
  text-align:left;
  padding: 1rem 1.5rem;
  float:left;
  display:inline-block;

}
a{
  text-decoration : none;
}
`;

const Card = styled.div`
min-height:25rem;
position:relative;
border-radius: 2rem;

img{
  border-radius: 2rem;
position: absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
}
p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom:10%;
    color:white;
    width:100%;
    transform: translate(-50% , 0%);
    text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;


const Gradiant = styled.div`
z-index:3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
border-radius: 2rem;

`;
const List = styled.div`
display:flex;
justify-content:center;
margin:1.2rem 0rem;
/* Media query for phones (up to 600px) */
@media only screen and (max-width: 600px) {
  /* Styles for phones go here */
  margin:1rem 0rem;

}

`;

const Grid = styled(motion.div)`
display: grid;
  grid-template-columns: repeat(auto-fit ,minmax(20rem , 1fr));
  grid-gap: 3rem;
`;

const FormStyle = styled.form`
margin :0rem 2rem;
position: relative;
width:100%;

input{
width:100%;
  border:none;
  font-size:1.5rem;
  background: linear-gradient(35deg , #494949, #313131);
  color:white;
  padding:1rem 3rem;
  border:none;
  border-radius:1rem;
  outline:none;
}
svg{
  position:absolute;
  top:50%;
  left:0%;
  transform:translate(100% , -50%);
  color:white;
}
`;
const DetailWrapper = styled.div`
border:red solid 1px;
margin:5rem 0;
width:100%;
display:flex;
.active{
  background-image: radial-gradient(circle, #e6d3a3, #e4d297, #e1d18b, #ddd180, #d8d174);
  color:#91972a;

}
img{
  // width:300px;
  // height:300px;
  margin:0 0 0 -5px ;
  float:right;
}
h2{
  margin:1rem 0 2rem auto;
  text-align:right;

}
p{
padding:1rem 0rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  padding:1rem ;
  margin-top:2rem;
}

`;
const Button = styled.button`
padding:1rem ;
color: #313131;
background:#f2f4f3;
cursor: pointer;
border-radius: 20px;
  background: #b6c454;
  box-shadow:  24px 24px 48px #9da948,
 -24px -24px 48px #cfdf60;
font-weight:600;
margin-right:1rem;
`;
const Info = styled.div`
// margin-right:2rem;
// float:left;

`;

export {Wrapper,Card,Gradiant,List, Grid,Cart ,FormStyle ,Linkk, DetailWrapper , Button , Info ,Nav};