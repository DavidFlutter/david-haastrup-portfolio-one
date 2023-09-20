import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <HeroSection></HeroSection>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}

export default App;
