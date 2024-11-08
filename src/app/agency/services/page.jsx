import Header from "../header"

import Practice from "./Top"
import Line from "./Line"
import Mission from "./Mission"
import VideoSection from "./video"
import FeatureSection from "./FeatureSection"
import FeatureSection2 from "./FeatureSection2"
import GradientLine from "./GradientLine"
import About from "../about"

 


export default function Page() 
{
    
    return (
        <div>
            <Header/>
            <Practice/>
            <Line/>
            <Mission/>
            <VideoSection/>
            <Line/>
            <FeatureSection/>
            <FeatureSection2/>
            <FeatureSection/>
            <GradientLine/>
            <About/>
            
        </div>
    )

  }