import './App.css'
import styled from 'styled-components'
import Board from './Components/Board'
import { useState } from 'react'
import Switches from './Components/Switches';


function App() {
  const [dataArray, setDataArray] = useState(['','','','',2,'','','','']);

  const handleSwitch = (arr) => {
    let CopyArray = [...dataArray];
    if(CopyArray[arr[0]] === '' && CopyArray[arr[3]] === ''){
      CopyArray[arr[0]] = CopyArray[arr[6]];
      CopyArray[arr[6]] = '';
    }
    if(CopyArray[arr[1]] === '' && CopyArray[arr[4]] === ''){
      CopyArray[arr[1]] = CopyArray[arr[7]];
      CopyArray[arr[7]] = '';
    }
    if(CopyArray[arr[2]] === '' && CopyArray[arr[5]] === ''){
      CopyArray[arr[2]] = CopyArray[arr[8]];
      CopyArray[arr[8]] = '';
    }
    if(CopyArray[arr[0]] === CopyArray[arr[6]] && CopyArray[arr[3]] === ''){
      CopyArray[arr[0]] = CopyArray[arr[0]] + CopyArray[arr[0]];
      CopyArray[arr[6]] = '';
    }
    if(CopyArray[arr[1]] === CopyArray[arr[7]] && CopyArray[arr[4]] === ''){
      CopyArray[arr[1]] = CopyArray[arr[1]] + CopyArray[arr[1]];
      CopyArray[arr[7]] = '';
    }
    if(CopyArray[arr[2]] === CopyArray[arr[8]] && CopyArray[arr[5]] === ''){
      CopyArray[arr[2]] = CopyArray[arr[2]] + CopyArray[arr[2]];
      CopyArray[arr[8]] = '';
    }
    if(CopyArray[arr[0]] === CopyArray[arr[3]]){
      CopyArray[arr[0]] = CopyArray[arr[0]] + CopyArray[arr[0]];
      CopyArray[arr[3]] = ''
    }
    if(CopyArray[arr[1]] === CopyArray[arr[4]]){
      CopyArray[arr[1]] = CopyArray[arr[1]] + CopyArray[arr[1]];
      CopyArray[arr[4]] = ''
    }
    if(CopyArray[arr[2]] === CopyArray[arr[5]]){
      CopyArray[arr[2]] = CopyArray[arr[2]] + CopyArray[arr[2]];
      CopyArray[arr[5]] = ''
    }
    if(CopyArray[arr[3]] === CopyArray[arr[6]]){
      CopyArray[arr[3]] = CopyArray[arr[3]] + CopyArray[arr[3]];
      CopyArray[arr[6]] = ''
    }
    if(CopyArray[arr[4]] === CopyArray[arr[7]]){
      CopyArray[arr[4]] = CopyArray[arr[4]] + CopyArray[arr[4]];
      CopyArray[arr[7]] = ''
    }
    if(CopyArray[arr[5]] === CopyArray[arr[8]]){
      CopyArray[arr[5]] = CopyArray[arr[5]] + CopyArray[arr[5]];
      CopyArray[arr[8]] = ''
    }
    if(CopyArray[arr[0]] === '' && CopyArray[arr[3]] !== ''){
      CopyArray[arr[0]] = CopyArray[arr[3]]
      CopyArray[arr[3]] = ''
    }
    
    if(CopyArray[arr[1]] === '' && CopyArray[arr[4]] !== ''){
      CopyArray[arr[1]] = CopyArray[arr[4]];
      CopyArray[arr[4]] = ''
    }
    
    if(CopyArray[arr[2]] === '' && CopyArray[arr[5]] !== ''){
      CopyArray[arr[2]] = CopyArray[arr[5]];
      CopyArray[arr[5]] = ''
    }
    
    if(CopyArray[arr[3]] === '' && CopyArray[arr[6]] !== ''){
      CopyArray[arr[3]] = CopyArray[arr[6]];
      CopyArray[arr[6]] = ''
    }
    
    if(CopyArray[arr[4]] === '' && CopyArray[arr[7]] !== ''){
      CopyArray[arr[4]] = CopyArray[arr[7]];
      CopyArray[arr[7]] = ''
    }
    
    if(CopyArray[arr[5]] === '' && CopyArray[arr[8]] !== ''){
      CopyArray[arr[5]] = CopyArray[arr[8]];
      CopyArray[arr[8]] = ''
    }    

    checkWin(CopyArray, arr);
    
    // setDataArray(CopyArray);
}

const checkWin = (CopyArray, arr) => {
  const randomNum = Math.floor(Math.random()*9);
  if(CopyArray[arr[randomNum]] !== ''){
    return checkWin(CopyArray, arr);
  }
  else{
    CopyArray[arr[randomNum]] = 2;
  }
  setDataArray(CopyArray);
}


  return (
    <Maindiv>
      <Board dataArray={dataArray} setDataArray={setDataArray}/>
      <Switches handleSwitch={handleSwitch}/>
    </Maindiv>
  )
}

export default App

const Maindiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`
