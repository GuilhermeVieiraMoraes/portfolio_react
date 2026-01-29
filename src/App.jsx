import './App.css'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// pages
import Introduction from './pages/Introduction/Introduction'



function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Introduction />
      </main>
      <Footer />
    </div>
  )
}

export default App
