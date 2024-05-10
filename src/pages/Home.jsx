import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import HomeShowcase from '../components/HomeShowcase/HomeShowcase'
import IntroSection from '../components/IntroSection/IntroSection'
import HomeStats from '../components/HomeStats/HomeStats'
import HomeEmpowerment from '../components/HomeEmpowerment/HomeEmpowerment'
import HomeCourses from '../components/HomeCourses/HomeCourses'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import HomeSocials from '../components/HomeSocials/HomeSocials'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navigation />
        <HomeShowcase/>
        <IntroSection />
        <HomeStats />
        <HomeEmpowerment />
        <HomeCourses />
        {/* <Testimonials /> */}
        <Contact />
        <HomeSocials />
        <Footer />
    </div>
  )
}

export default Home