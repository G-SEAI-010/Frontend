import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;
