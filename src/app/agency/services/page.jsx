import Header from "../header"

import Practice from "./Top"
import Line from "./Line"
import Mission from "./Mission"
import VideoSection from "./video"
import FeatureSection from "./FeatureSection"
import IndustrySlide from "./industry"
import FeatureSection2 from "./FeatureSection2"
import GradientLine from "./GradientLine"
import About from "../about"
import ServicesTop from "./industryTop"
import AIServices from "./AIservices"
import ServicesSection3 from "./srvicesnew"

 


export default function Page() 
{
    
    return (
        <div>
            <Header/>
            <Practice/>
            <Line/>
            {/* <Mission/> */}
            <VideoSection/>
            {/* <Line/> */}

            <Mission/>
        
            <ServicesSection3/>

            

            <ServicesTop/>
            <IndustrySlide/>
            
            {/* <FeatureSection2/> */}
            {/* <ServicesTop/> */}
            <AIServices/>
            {/* <FeatureSection/> */}
           
            <GradientLine/>
            <About/>
            
        </div>
    )

  }