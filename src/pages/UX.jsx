import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import CourseInfoCard from '../components/CourseInfoCard/CourseInfoCard'
import UXDesign from '../components/CourseInfoCard/UXDesign'
import Footer from '../components/Footer/Footer'
const UX = () => {
  return (
    <div>
        <Navigation />
        <CourseInfoCard Duration="8 weeks" Certification="Yes" Platform="Telegram" />  
        <UXDesign />
        
        <Footer />
    </div>
  )
}

export default UX