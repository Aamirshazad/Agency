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
import ServicesTop from "./servicesTop"
import AIServices from "./AIservices"

 


export default function Page() 
{
    
    return (
        <div>
            <Header/>
            <Practice/>
            <Line/>
            <Mission/>
            <VideoSection/>
            {/* <Line/> */}
            
            {/* <FeatureSection2/> */}
            {/* <ServicesTop/> */}
            <AIServices/>
            {/* <FeatureSection/> */}
            <IndustrySlide/>
            <GradientLine/>
            <About/>
            
        </div>
    )

  }