import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Event from "../layout/Event";
import Biography from "../layout/Biography";
import Commint from "../layout/Commint";
import About from "../layout/About";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";


const Home = () => {
  return(
      <>
          <Navbar/>
          <Sidebar/>
          <Event/>
          <Biography/>
          <Commint/>
          <About/>
          <Contact/>
          <Footer/>
      </>
  )
}

export default Home;