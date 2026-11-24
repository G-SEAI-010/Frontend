function App() {
  return (
    <>
      <h1>Events</h1>

      <div className='app'>
        <form>
          <label htmlFor='name'>
            Name <input type='text' name='name' id='name' />
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
          <button name='button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
