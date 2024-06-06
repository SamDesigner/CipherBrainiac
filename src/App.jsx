import React from 'react'
import Home from './pages/Home'
import ProjectManagement from './pages/ProjectManagement'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import WebDevelopment from './pages/WebDevelopment'
import UX from './pages/UX'
const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projectmanagement' element={<ProjectManagement />} />
                <Route path='/webdevelopment' element={<WebDevelopment />} />
                <Route path='/design' element={<UX />} />
            </Routes>
        </Router>
        
    </div>
  )
}

export default App