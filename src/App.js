import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Skill from './components/Skills/skills'
import PortfolioList from './components/Portfolio_list/portfolioList';
import Contact from './components/Contact/contact';
const App = () => {
  return (
  <div >
    <Nav/>
    <About/>
    <Skill />
    <PortfolioList />
    <Contact />
  </div>
)
};

export default App;
