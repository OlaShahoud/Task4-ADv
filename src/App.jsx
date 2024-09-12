import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Component/AboutUs/AboutUs';
import CardHero from './Component/CardHero/CardHero';
import Chemistry from './Component/Chemistry/Chemistry';
import Help from './Component/Help/Help';
import Hero from './Component/Hero/Hero';
import Navbar1 from './Component/Navbar1/Navbar1';
import Services from './Component/Services/Services';
import Appointment from './Component/Appointment/Appointment';
import Departments from './Component/Departments/Departments';
import Testimonials from './Component/Testimonials/Testimonials';
import Doctors from './Component/Doctors/Doctors';
import Gallery from './Component/Gallery/Gallery';
import Pricing from './Component/Pricing/Pricing';
import Asked from './Component/Asked/Asked';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';


function App() {


  return (
    <>
    <Navbar1/>
    <Hero/>
    <CardHero/>
    <Help/>
    <AboutUs/>
    <Chemistry/>
    <Services/>
    <Appointment/>
    <Departments/>
    <Testimonials/>
    <Doctors/>
    <Gallery/>
   <Pricing/>
   <Asked/>
   <Contact/>
   <Footer/>
  


<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    </>

  )
}

export default App
