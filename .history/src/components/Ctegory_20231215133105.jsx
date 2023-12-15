import { LuCupSoda } from "react-icons/lu";
import { FaBowlFood } from "react-icons/fa6";
import { MdSoupKitchen } from "react-icons/md";
import { GiJelly } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import {List} from '../style/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category(){
    return(
        <List>
              <SLinks to={'/cuisine/Thai'}>
                <LuCupSoda />
                <h4>نوشیدنی</h4>
            </SLinks>
            <SLinks to={'/cuisine/Japanese'}>
                <TbSalad />
                <h4>سالاد</h4>
            </SLinks>
            <SLinks to={'/cuisine/Thai'}>
                <GiJelly />
                <h4>ماست</h4>
            </SLinks>
            <SLinks to={'/cuisine/Italian'}>
                <MdSoupKitchen />
                <h4>خورشت</h4>
            </SLinks>
            <SLinks to={'/cuisine/American'}>
                <FaBowlFood />
                <h4>خوراک</h4>
            </SLinks>

        </List>
    );
}

const SLinks = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right:2rem;
  text-decoration:none; 
  background:#f2f4f3 ;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4{
    color: #b6c454;
    font-size:1rem;
  }
  svg{
    color:#b6c454;
    font-size:1.5rem;
  }
  &.active{
    background-image: radial-gradient(circle, #e6d3a3, #e4d297, #e1d18b, #ddd180, #d8d174);
    svg{
        color: #91972a;
    }
    h4{
        color:  #91972a;
    }

  }
  border-radius: 20px;
  box-shadow:  24px 24px 48px #9da948,
 -24px -24px 48px #cfdf60;

 /* Media query for phones (up to 600px) */
@media only screen and (max-width: 600px) {
  /* Styles for phones go here */
  border:red solid 1px;
  margin-right:1rem;
}

/* Media query for tablets (601px to 900px) */
@media only screen and (min-width: 601px) and (max-width: 900px) {
  /* Styles for tablets go here */
}

/* Media query for laptops (901px and above) */
@media only screen and (min-width: 901px) {
  /* Styles for laptops go here */
}

`;

export default Category;