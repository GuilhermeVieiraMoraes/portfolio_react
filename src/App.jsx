import './App.css'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// pages
import Introduction from './pages/Introduction/Introduction'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'



function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Introduction />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
