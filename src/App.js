import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Experince from './pages/Experince';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   <div className='container text-white d-flex flex-column gap-5 '>
<Navbar  />
<Home />

<Experince />
<Skills />
<Projects />
<Contact />
   </div>
  );
}

export default App;
