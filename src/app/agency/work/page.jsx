import Header2 from "@/app/agency/header"
import Testimonial from "../testnomial"
import WorkSection from "./intro"
import  OurWorkSection from "./introwork" 
import Foter from "../foterlink"
import ContactSection from "../about"
import Pagez from "./test"




export default function Page(){
    return(
        <>
        <Header2/>
        <Pagez/>
        <OurWorkSection/>
        <WorkSection/>
        <ContactSection/>
        

        <Foter/>
        
    


        </>
    )
}