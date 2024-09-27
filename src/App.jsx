import './App.css';
import AccordionSection from './components/accordionSection/Accordion.section';
import AdvantagesSection from './components/advantagesSection/AdvantagesSection';
import CompanySection from './components/copanySection/CompanySection';
import HomeSection from './components/homeSection/HomeSection';
import TechnicySection from './components/technicySection/TechnicySection';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';


function App() {
  return (
    <div className="App">
        <Header />
        <HomeSection />
        <CompanySection />
        <TechnicySection />
        <AdvantagesSection />
        <AccordionSection />
        <Footer />
    </div>
  );
}

export default App;