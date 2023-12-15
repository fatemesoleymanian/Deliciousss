import {FaPizzaSlice , Fa} from 'react-icons/fa';
import {GiChopsticks , GiNoodles} from 'react-icons/gi';
import {LuSalad} from 'react-icons/lu';
import {List} from '../style/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category(){
    return(
        <List>
              <SLinks to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>نوشیدنی</h4>
            </SLinks>
            <SLinks to={'/cuisine/Japanese'}>
                <LuSalad />
                <h4>سالاد</h4>
            </SLinks>
            <SLinks to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>ماست</h4>
            </SLinks>
            <SLinks to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>خورشت</h4>
            </SLinks>
            <SLinks to={'/cuisine/American'}>
                <FaHamburger />
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
    font-size:0.8rem;
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
`;

export default Category;