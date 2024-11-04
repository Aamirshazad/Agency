
import ProcessComponent from "./intro"
import Case2 from './case2'
import Case1 from "./case1"
import Case3 from "./case3"
import OurValues from "./ourvalue";
import Header from "../header";
import Footer from "../foterlink";



export default function Page(){
    return(
        <>
        <Header/>
        <ProcessComponent/>
        <Case1/>
        <Case2/>
        <Case3/>
        <OurValues/>
        
        <Footer/>
        </>
    )
}