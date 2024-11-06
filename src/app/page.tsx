import Pagez from "./agency/serivices1"
import Navigate from "./agency/header"
import Services1 from "./agency/services"
import Services3 from "./agency/services3"
import Opportunities from "./agency/Opportunities"
import  About from "./agency/about"
import Foter from "./agency/foterlink"
// import Testimonial from "./agency/testnomial"
import Header from '@/app/agency/header'
import HeroSection from "./agency/herosection"
import VisionSection  from "./agency/VisionSection"
import Summary from "./summary"




import Case3 from "./agency/ourprocess/case3"


export default function Page(){
    return (
        <div>
        <Header/>
        <HeroSection/>
        <Summary/>
        {/* <VisionSection/> */}
        <Pagez/>

        {/* <Testimonial/> */}
        <Opportunities/>
        
      
        <Services1/>
        <Services3/>
        <About/>
        <Foter/>
        

        </div>
    )
}