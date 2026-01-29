
import Wrapper from './components/layout/Wrapper'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Socials from './components/layout/Socials'
import Hero from './components/section/Hero'
import Services from './components/section/Services'
import SocialsProof from './components/section/SocialsProof'
import Partners from './components/section/Partners'
import PhuQuocMap from './components/section/PhuQuocMap'
import HeroWithOrbs from './components/section/HeroWithOrbs'


export default function HomeVi(){
    return (
        <>
            <Header />
            {/* <Socials /> */}
            <HeroWithOrbs />
            <PhuQuocMap />
            <Services />
            {/* <SocialsProof /> */}
            <Footer />
        </>
    )
}
