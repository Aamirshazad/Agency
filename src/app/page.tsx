"use client"
import Pagez from "./agency/serivices1"
import Navigate from "./agency/header"
import Services1 from "./agency/services"
import Services3 from "./agency/services3"
import ServicesSection from "./agency/serivices1"
import Opportunities from "./agency/Opportunities"
import  About from "./agency/about"
import Foter from "./agency/foterlink"
import Testimonial from "./agency/testnomial"
import Header from '@/app/agency/header'
import NowPlatform from "./agency/herosection"
import VisionSection  from "./agency/VisionSection"
import Summary from "./summary"
import FAQ from "./FAQ"
import Line from "./agency/services/Line"
import GradientLine from "./agency/services/GradientLine"
import Ourwork from "./agency/ourwork"
import Niche from "./agency/niche"
import IndustrySlide from "./agency/services/industry"
import ServicesCard from "./agency/services/FeatureSection2"
import ProcessPhases from "./businessProcess"
import WorkProcess  from "./agency/workprocess"
import AIservices from "./useservices"
import ServicesSection2 from "./servicesdata"
import Servicesdatatop from "./servicesdatatop"

import CaseStudyCard from "./CaseStudyCard"


import Case3 from "./agency/ourprocess/case3"
import { HelpCircleIcon } from "lucide-react"


export default function Page(){
    return (
        <div>
        
         <Header/>
        <NowPlatform/>
        <Summary/>
        {/* <Testimonial/> */}
    
         {/*    */}
         {/* <Line/> */}
        <Opportunities/>
        <ServicesCard/>
       
        {/* < IndustrySlide/> */}
        
        
        {/* <Line/> */}
        
        {/* <Line/> */}
       
        
        <Niche/>
        < IndustrySlide/>
       
        
        <Ourwork/>
        <CaseStudyCard/>

        {/* <ServicesSection/> */}
        <VisionSection/>
        <Servicesdatatop/>
        <ServicesSection2/>
        <WorkProcess/>

        
        {/* <ProcessPhases/> */}
        {/* <Services/> */}
       
        <Services3/>
        
        
        <AIservices/>
       
       
        <About/>

        <FAQ/> 
        <GradientLine/>
        <Foter/> 
        

        </div>
    )
}