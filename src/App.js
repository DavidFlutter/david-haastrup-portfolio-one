import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <HeroSection></HeroSection>
        <ProjectsSection></ProjectsSection>
      </div>
    </div>
  );
}

export default App;
