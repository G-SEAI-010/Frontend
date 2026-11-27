import { useEffect, useState } from 'react';

const Effect = () => {
  const [todo, setTodo] = useState(null);
  const [count, setCount] = useState(0);
  const [myObj, setMyObj] = useState({ test: 42 });

  // setTimeout(callback, wann)
  // useEffect(callback, dependencyArray);
  useEffect(() => {
    console.log('Effect wird beim ersten Render ausgeführt');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []); // leeres Dependency Array: nur beim ersten Render

  //   useEffect(() => {
  //     console.log('Wird nach jedem Render ausgeführt');
  //   });

  useEffect(() => {
    console.log(count);
    console.log("Wird immer ausgeführt, nachdem sich 'count' geändert hat.");
  }, [count]);

  // value type:  int, boolean, ...
  // reference type: [], {}
  //   const myObj = { test: 42 };

  useEffect(() => {
    console.log(myObj);
    console.log("Wird immer ausgeführt, nachdem sich 'myObj' geändert hat.");
  }, [myObj]);

  useEffect(() => {
    const handleResize = (e) => {
      console.log(e.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {todo && <p>{todo.title}</p>}
      <button onClick={() => setCount((c) => c + 1)}>Zähler: {count}</button>
    </div>
  );
};

export default Effect;

// class MyComponent extends React.Component {}
