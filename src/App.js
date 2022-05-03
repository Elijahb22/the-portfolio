import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Skill from './components/Skills/skills'
import Portfolio from './components/Portfolio/portfolio';
const App = () => {
  return (
  <div >
    <Nav/>
    <About/>
    <Skill />
    <Portfolio />
  </div>
)
};

export default App;
