import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
// import Testimoniols from './components/testimoniols/Testimoniols';
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Portfollio from './components/portfollio/Portfollio';
const App=()=>{
  return(
<>
<Header/>
<Navbar/>
<About/>
<Experience/>
<Portfollio/>
{/* <Testimoniols/> */}
<Contact/>
<Footer/>
</>
);
};
export default App;
