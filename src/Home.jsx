import { Awards } from "./Components/Awards"
import { Hero } from "./Components/Hero"
import { Listing } from "./Components/Listing"
import { Navbar } from "./Components/Navbar"
import { Services } from "./Components/Services"
import { Location } from "./Components/Location"
import { Team } from "./Components/Team"
import { Price } from "./Components/Price"
import { Footer } from "./Components/Footer"

export const Home = () => {
    return <>
    
    <Navbar/>
    <Hero/>
    <Services/>
    <Listing/>
    <Awards/>
    <Location/>
    <Team/>
    <Price/>
    <Footer/>
    
    </>
}