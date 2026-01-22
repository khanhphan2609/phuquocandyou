
import Wrapper from './components/layout/Wrapper'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Socials from './components/layout/Socials'
import Hero from './components/section/Hero'
import Services from './components/section/Services'

export default function HomeVi(){
    return (
        <Wrapper>
            <Header />
            <Socials />
            <Hero />
            <Services />
            <Footer />
        </Wrapper>
    )
}
