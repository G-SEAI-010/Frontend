import { useState } from 'react';

import Counter from './components/Counter';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <div>
      <Counter count={counter1} setCount={setCounter1} />
      <Counter count={counter2} setCount={setCounter2} />
      <Counter count={counter3} setCount={setCounter3} />
    </div>
  );
};

export default App;
