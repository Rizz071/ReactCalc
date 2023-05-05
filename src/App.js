import './App.css';

import MainCalcPad from './components/Calculator/MainCalcPad/MainCalcPad';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row justify-content-center'>
          <MainCalcPad />
          <MainCalcPad />
          <MainCalcPad />
        </div>
      </div>
    </div >
  );
}

export default App;
