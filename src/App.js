import './App.css';

import MainCalcPad from './components/Calculator/MainCalcPad/MainCalcPad';
import Navbar from './components/Navigation/NavbarMain';
import CalcComponent from './components/Calculator/CalcComponent/CalcComponent';
import { useState } from 'react';






function App() {

  const [num_calc, setNumCalc] = useState(2)

  const setCalcNumber = (event, num_calc) => {

    if (num_calc <= 0) num_calc = 0;
    if (num_calc >= 10) num_calc = 10;

    setNumCalc(num_calc)

    console.log('Amount of calcs: ' + num_calc)

  }





  return (
    <div className="App">

      <Navbar num_calc={num_calc} setCalcNumberFunction={setCalcNumber} />

      <CalcComponent num_calc={num_calc} />

    </div >
  );
}

export default App;
