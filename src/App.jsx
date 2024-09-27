import NavBar from './Components/NavBar'
import Header from './Header'
import Section from './Section'
import Card from './Card'
import Contact from './Contact'
import Footer from './Components/Footer'
import { Element } from "react-scroll";



export default function App() {
  return (
    <div className="bg-yellow-100">

       <NavBar />

       <Element name="header">
          <Header />
        </Element>

        <Element name="section">
          <Section />
        </Element>

        <Element name="cards">
          <Card />
        </Element>

        <Element name="contact">
          <Contact/>
        </Element>

        <Footer />

    </div>
  )
}