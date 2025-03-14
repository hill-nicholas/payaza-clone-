import { useEffect } from "react";
import "./App.css";
import Hero from "./Sections/Hero";
import "aos/dist/aos.css";
import AOS from "aos";
import Partners from "./Sections/Partners";
import PaymentSolution from "./Sections/PaymentSol";
import BoostRevenue from "./Sections/BoostRev";
import BoostSales from "./Sections/BoostSales";
import SmarterPayment from "./Sections/SmarterPayment";
import Footer from "./Sections/Footer";
import Navbar from "./Sections/Navbar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <PaymentSolution />
      <BoostRevenue />
      <BoostSales />
      <SmarterPayment />
      <Footer />
    </div>
  );  
}

export default App;
