import { Footer } from './components/js/footer';
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';
import { Nav } from './components/js/nav';
import { Section } from './components/js/section';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
