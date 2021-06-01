import './App.css';
import Hero from './components/Hero'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills'
import Contact from './components/Contact'
import Popup from './components/Popup'


function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
