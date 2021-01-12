import React from "react";
import viewStyle from "./style/View.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { cardAction } from "../../store/actions"

const View = () => {
  const dispatch = useDispatch();
  const showOption = () => {
    dispatch(cardAction.setCardLevel("firstCard"))
  };
  const showOptionTwo = () => {
    dispatch(cardAction.setCardLevel("secondCard"))
  }
  return (
    <div className={`card ${viewStyle.cardTwo}`}>
        
      <p>VIEW</p>
      <span>
        <button onClick={showOption}>
        <GiHamburgerMenu size={25} />
        </button>
      </span>
      <span>
        <button onClick={showOptionTwo}>
        <FiMenu  size={25}/>
        </button>
      </span>
      
      
      <div className={viewStyle.vertical} />
      
      
      

      <p>SORT</p>
      <div className={viewStyle.optionOne}>
      <select>
          <option  selected value="Popular">Popular</option>
          <option value="Recent">Recent</option>
          </select>
          </div>
          <div className={viewStyle.vertical} />
          
          
          <div className={viewStyle.optionTwo}>
          <select>
          <option value ="Now">Now</option>
              <option selected value ="Today">Today</option>
              <option value ="This Week">This week</option>
              <option value ="This Month">This Month</option>
              <option value ="All Time">All Time</option>
              </select>
              </div>
              

    </div>
  );
};
export default View;
