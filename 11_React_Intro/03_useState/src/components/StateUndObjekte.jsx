import { useState } from 'react';

export default function StateUndObjekte() {
  const [newName, setNewName] = useState('');
  const [names, setNames] = useState(['Lennart', 'Kübra', 'Aleksandra']);

  function handleSubmit(e) {
    e.preventDefault();

    // const newNamesArr = [...names, newName];
    // setNames(newNamesArr);

    setNames((n) => [...n, newName]);
    setNewName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setNewName(e.target.value)} value={newName} />
      </form>
      <ul>
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
