import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import CourseInfoCard from '../components/CourseInfoCard/CourseInfoCard'
import ProjectManagementInfo from '../components/CourseInfoCard/ProjectManagementInfo'
import HomeSocials from '../components/HomeSocials/HomeSocials'
import Footer from '../components/Footer/Footer'

const ProjectManagement = () => {
  return (
    <div>
        <Navigation />
        <CourseInfoCard Duration="8 weeks" Certification="Yes" Platform="Telegram" />  
        <ProjectManagementInfo />
        <HomeSocials />
        <Footer />
    </div>
  )
}

export default ProjectManagement