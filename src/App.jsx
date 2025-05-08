import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Instructors from './pages/Instructors'
import Contact from './pages/Contact'

// Import components
import Layout from './components/Layout'

// Import ContentProvider
import { ContentProvider } from './context/ContentContext'

function App() {
  return (
    <ContentProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ContentProvider>
  )
}

export default App
