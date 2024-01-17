/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import styled from "styled-components"


const Board = ({dataArray, setDataArray}) => {
  return (
    <BoardDiv>
        {dataArray.map((data, i) => <SingleBox data={data} key={i}>{data}</SingleBox>)}
    </BoardDiv>
  )
}

export default Board

const BoardDiv = styled.main`
    width: 304px;
    height: 304px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 2px solid black;
`

const SingleBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    font-family: monospace;
    font-weight: 700;
    background-color: ${(props)=> props.data === 2? '#f6edce'
                                : props.data === 4? '#d2ccb4'
                                : props.data === 8? '#4ff0ff'
                                : props.data === 16? '#ffd383'
                                : props.data === 32? 'orange'
                                : props.data === 64? 'red'
                                : props.data === 128? 'black':'#eaeaea'};
    color: ${(props)=> props.data === 64? 'white':
                       props.data === 128? 'white': 'black'};
`