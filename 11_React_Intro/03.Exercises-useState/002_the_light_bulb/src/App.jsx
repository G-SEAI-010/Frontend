import { useState } from 'react';

import LightBulb from './components/LightBulb';

import './index.css';

const App = () => {
  const [lightSwitch, setLightSwitch] = useState(false);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    if (counter < 10) {
      setLightSwitch((l) => !l); // typischer boolean-Toggle
    }

    // if (lightSwitch) {
    //   setCounter((c) => c + 1);
    // }
    setCounter((c) => (lightSwitch ? c + 1 : c));

    console.log(counter);

    // ! 1) direct state update → alten State vollstandig überschreiben mit neuem State
    // ! 2) functional state update → vorheriger Wert/State ist relevant
    // setLightSwitch((l) => (l === false ? true : false));
  }

  return (
    <>
      <button onClick={handleClick} disabled={counter >= 10}>
        {lightSwitch ? 'Switch off' : 'Switch on'}
      </button>
      <button onClick={() => setCounter(0)} disabled={counter < 10}>
        Reset
      </button>
      <LightBulb lightSwitch={lightSwitch} />
    </>
  );
};

export default App;
