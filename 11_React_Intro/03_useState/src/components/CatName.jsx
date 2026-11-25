import { useState } from 'react';

export default function CatName({ color, setColor }) {
  const [catName, setCatName] = useState('Minka');

  return (
    <div>
      <input
        type='text'
        name='catName'
        id='catName'
        value={catName}
        onChange={(e) => {
          console.log(e.target.value);
          setCatName(e.target.value);
          setColor(e.target.value);
        }}
      />
      <p
        style={{
          color: color,
        }}
      >
        Katzenname: {catName}
      </p>
    </div>
  );
}
