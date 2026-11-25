import { useState } from 'react';

export default function MultiCounter() {
  const [count, setCount] = useState(42);

  const handleDblClick = () => {
    setCount((vorherigerZustand) => {
      return vorherigerZustand + 1;
    });
    setCount((vorherigerZustand) => {
      return vorherigerZustand + 1;
    });
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onDoubleClick={handleDblClick}>Click me</button>
    </div>
  );
}
