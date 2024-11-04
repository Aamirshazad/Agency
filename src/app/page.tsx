// import Pagez from "./agency/full"
import Navigate from "./agency/header"
import ServicesSection from "./agency/services"
import Opportunities from "./agency/Opportunities"
import  About from "./agency/about"
import Foter from "./agency/foterlink"
import Testimonial from "./agency/testnomial"
import Header from '@/app/agency/header'
import HeroSection from "./test"



export default function Page(){
    return (
        <div>
        <Header/>
        <HeroSection/>

        <Testimonial/>
        <Opportunities/>
      
        <ServicesSection/>
        <About/>
        <Foter/>
        

        </div>
    )
}