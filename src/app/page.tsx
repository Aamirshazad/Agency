import Pagez from "./agency/full"
import Navigate from "./agency/header"
import ServicesSection from "./agency/services"
import Opportunities from "./agency/Opportunities"
import  About from "./agency/about"
import Foter from "./agency/foterlink"
import Testimonial from "./agency/testnomial"



export default function Page(){
    return (
        <div>
        <Navigate/>
        <Pagez/>

        <Testimonial/>
        <Opportunities/>
      
        <ServicesSection/>
        <About/>
        <Foter/>

        </div>
    )
}