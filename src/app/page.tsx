import Pagez from "./agency/serivices1"
import Navigate from "./agency/header"
import Services1 from "./agency/services"
import Services3 from "./agency/services3"
import ServicesSection from "./agency/serivices1"
import Opportunities from "./agency/Opportunities"
import  About from "./agency/about"
import Foter from "./agency/foterlink"
// import Testimonial from "./agency/testnomial"
import Header from '@/app/agency/header'
import NowPlatform from "./agency/herosection"
import VisionSection  from "./agency/VisionSection"
import Summary from "./summary"
import FAQ from "./FAQ"
import Line from "./agency/services/Line"
import GradientLine from "./agency/services/GradientLine"
import Ourwork from "./agency/ourwork"




import Case3 from "./agency/ourprocess/case3"
import { HelpCircleIcon } from "lucide-react"


export default function Page(){
    return (
        <div>
        
         <Header/>
        <NowPlatform/>
        <Summary/>
    
         <VisionSection/>  
         <Line/>
        <Opportunities/>
        <Services1/>
        <Services3/>
        <Line/>
        <About/>
        <Line/>
        <Ourwork/>
        <ServicesSection/>
        <FAQ/> 
        <GradientLine/>
        <Foter/> 
        

        </div>
    )
}