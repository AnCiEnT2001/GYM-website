import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Prograns from './components/Programs/Prograns';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Prograns/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
