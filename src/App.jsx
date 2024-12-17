import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { Header, Footer } from "./components";
import {
  Hero,
  Clients,
  Business,
  Design,
  Customer,
  Market,
  GetDemo,
  Manage,
  Pixelgrade,
} from "./sections";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 500,
    })
  }, []);

  return (
    <>
    <Header/>
    <Hero/>
    <Clients/>
    <Manage/>
    <Pixelgrade/>
    <Business/>
    <Design/>
    <Customer/>
    <Market/>
    <GetDemo/>
    <Footer/>
    </>
  )
}

export default App
