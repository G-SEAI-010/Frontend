function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const { name, age, color, recommend } = event.target.elements;

    if (!name.value.trim()) alert('Name is required');
    if (!age.value.trim()) alert('Age is required');
    if (!color.value.trim()) alert('Color is required');
  }

  return (
    <>
      <h1 onClick={() => console.log('geclickt')}>Events</h1>

      <div className='app'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Name{' '}
            <input
              type='text'
              name='name'
              id='name'
              onChange={(event) => {
                if (event.target.value === 'secretcodeunlocked') alert('geknackt!');
              }}
            />
          </label>
          <label htmlFor='age'>
            Age <input type='text' name='age' id='age' inputMode='numeric' pattern='[0-9]*' />
          </label>
          <label htmlFor='color'>
            Favorite Color
            <select name='color' defaultValue='' id='color'>
              <option value='' disabled>
                --Select--
              </option>
              <option value='red'>Red</option>
              <option value='green'>Green</option>
              <option value='blue'>Blue</option>
            </select>
          </label>
          <fieldset>
            <legend>Would you recommend our site?</legend>
            <input type='checkbox' name='recommend' id='recommend' />
            <label htmlFor='recommend' className='checkbox'>
              I would recommend this site
            </label>
          </fieldset>
          <hr />
          <button name='button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
