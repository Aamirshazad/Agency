import Pagez from "./agency/serivices"
import Navigate from "./agency/header"
import ServicesSection from "./agency/services"
import Opportunities from "./agency/Opportunities"
import  About from "./agency/about"
import Foter from "./agency/foterlink"
import Testimonial from "./agency/testnomial"
import Header from '@/app/agency/header'
import HeroSection from "./agency/herosection"
import VisionSection  from "./agency/VisionSection"
import HeroSectionWithServices from "./test"



export default function Page(){
    return (
        <div>
        <Header/>
        <HeroSection/>
        <HeroSectionWithServices/>
        <VisionSection/>
        <Pagez/>

        <Testimonial/>
        <Opportunities/>
        <ServicesSection/>
      
        <ServicesSection/>
        <About/>
        <Foter/>
        

        </div>
    )
}