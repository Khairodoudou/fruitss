import NavBar from './Components/NavBar'
import Header from './Header'
import Section from './Section'
import { Element } from "react-scroll";



export default function App() {
  return (
    <div className="bg-yellow-100">

       <NavBar />

       <Element name="header">
          <Header />
        </Element>

        <Element name="header">
          <Section />
        </Element>

    </div>
  )
}