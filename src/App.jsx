import './App.css';
// Importing components
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Leaf from './components/leaf/leaf'
import Hutan from './components/hutan/hutan'

function App() {
  return (
    <>
      <Header />
      <Leaf />
      <Nav />
      <About />
      <Projects />
      <Hutan />
      <Skills />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
