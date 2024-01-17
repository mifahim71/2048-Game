/* eslint-disable react/prop-types */
// import React from 'react'
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styled from "styled-components"

const Switches = ({handleSwitch}) => {
    const upArray = [0,1,2,3,4,5,6,7,8];
    const leftArray = [6,3,0,7,4,1,8,5,2];
    const rightArray = [2,5,8,1,4,7,0,3,6];
    const downArray = [8,7,6,5,4,3,2,1,0];
  return (
    <SwitchDiv>
        <div className="singleSwitchContainer upper">
            <div className="upperSwitch" onClick={()=>handleSwitch(upArray)}><FaArrowUp/></div>
        </div>
        <div className="singleSwitchContainer left-right">
            <div className="leftSwitch" onClick={()=>handleSwitch(leftArray)}><FaArrowLeft/></div>
            <div className="rightSwitch" onClick={()=>handleSwitch(rightArray)}><FaArrowRight/></div>
        </div>
        <div  className="singleSwitchContainer down">
            <div className="downSwitch" onClick={()=>handleSwitch(downArray)}><FaArrowDown/></div>
        </div>
    </SwitchDiv>
  )
}

export default Switches

const SwitchDiv = styled.div`
    width: 210px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .singleSwitchContainer{
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }
    .upper, .down{
        justify-content: center;
    }
    .left-right{
        justify-content: space-between;
    }
    .upperSwitch, .leftSwitch, .rightSwitch, .downSwitch{
        width: 70px;
        height: 100%;
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease;
        cursor: pointer;
    }
    .upperSwitch:hover, .leftSwitch:hover, .rightSwitch:hover, .downSwitch:hover{
        color: white;
        background-color: black;
    }
   
`
