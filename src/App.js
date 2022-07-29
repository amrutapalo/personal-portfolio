import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Testimonial from './components/Testimonials/Testimonial';
import NavBar from './components/UI/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default App;
