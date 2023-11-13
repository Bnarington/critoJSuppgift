
import './App.css';
import './styles/sitewide/SiteWide.css'
import './styles/sitewide/buttons.css'
import Header from './components/sitewide/01_Header';
import Showcase from './components/index/02_Showcase';
import CompanyLogos from './components/index/03_CompanyLogos';
import FeaturesBox from './components/index/04_featuresBox';
import FounderBox from './components/index/05_FounderBox';
import ServicesBox from './components/index/06_ServicesBox';
import WhyUs from './components/index/07_WhyUs';
import ProjectCase from './components/index/08_ProjectCase';
import TeamBackground from './components/index/09_TeamBackground';
import NewsSection from './components/index/10_NewsSection';
import NewsLetter from './components/index/11_NewsLetter';
import Footer from './components/sitewide/12_Footer';

function App() {
  return (
    <div>
        <Header />
        <Showcase />
        <CompanyLogos />
        <FeaturesBox />
        <FounderBox />
        <ServicesBox />
        <WhyUs />
        <ProjectCase />
        <TeamBackground />
        <NewsSection />
        <NewsLetter />
        <Footer />
    </div>
  );
}

export default App;
