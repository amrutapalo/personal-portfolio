import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Testimonial from './components/Testimonials/Testimonial';


function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default App;
