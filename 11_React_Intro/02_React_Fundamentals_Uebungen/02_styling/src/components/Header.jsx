import './Header.css';
import Navigation from './Navigation.jsx';

export default function Header() {
  const color = 'blue';

  return (
    <header className='my-header items-center'>
      <h1
        style={{
          backgroundColor: color,
        }}
      >
        React Fundamentals
      </h1>
      <Navigation />
    </header>
  );
}
