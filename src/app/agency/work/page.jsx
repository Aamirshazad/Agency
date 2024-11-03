import Header from "@/app/agency/header"
import Testimonial from "../testnomial"
import WorkSection from "./intro"
import  OurWorkSection from "./introwork" 
import Foter from "../foterlink"
import ContactSection from "../about"
import MyComponent from "./test"



export default function Page(){
    return(
        <>
        <MyComponent/>
        <Header/>
        <OurWorkSection/>
        <WorkSection/>
        <ContactSection/>
        

        <Foter/>
        
    


        </>
    )
}