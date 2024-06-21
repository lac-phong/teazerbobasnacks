import React from 'react'
import './App.css'
import {
  BanhMiLogo,
  BanhMiQR,
  DumplingCartLogo,
  DumplingCartQR,
  TeazerLogo,
  TeazerQR
} from './assets';

function App() {

  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="App">
      <img src={BanhMiLogo} alt="Banh Mi Logo" className="fixed-size" onClick={() => handleClick('https://www.banhmibowlsc.com/')}/>
      <img src={BanhMiQR} alt="Banh Mi QR" className="fixed-size" />
      <br></br>
      <img src={DumplingCartLogo} alt="Dumpling Cart Logo" className="fixed-size" onClick={() => handleClick('https://sjdowntownfoodhall.com/s/dumpling-cart/96-e-santa-clara-st-san-jose/d8e1b502-8fac-42f3-b79c-048414706367/Lychee%20Green%20Tea/dae8de00-4d04-4e77-bd66-a8e3c2dbe078')}/>
      <img src={DumplingCartQR} alt="Dumpling Cart QR" className="fixed-size" />
      <br></br>
      <img src={TeazerLogo} alt="Teazer Logo" className="fixed-size" onClick={() => handleClick('https://sjdowntownfoodhall.com/s/teazer/96-e-santa-clara-st-san-jose/3e9580fb-4fca-4161-98c1-a241752b54b8')}/>
      <img src={TeazerQR} alt="Teazer QR" className="fixed-size" />
    </div>
  );
}

export default App;
