import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import CourseInfoCard from '../components/CourseInfoCard/CourseInfoCard'
import WebDevelopmentInfo from '../components/CourseInfoCard/WebDevelopmentInfo'
import HomeSocials from '../components/HomeSocials/HomeSocials'
import Footer from '../components/Footer/Footer'
const WebDevelopment = () => {
  return (
    <div>
        <Navigation />
        <CourseInfoCard Duration="3 months" Certification="Yes" Platform="Telegram" />
        <WebDevelopmentInfo />
        <HomeSocials />
        <Footer />
    </div>
  )
}

export default WebDevelopment