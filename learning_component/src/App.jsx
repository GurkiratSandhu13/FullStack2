import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import NavBar from './components/navBar'
import Footer from './components/footer'
import Home from './components/sub-components/home'
import About from './components/sub-components/about'
import Contact from './components/sub-components/contact'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <Header />
    <NavBar setCurrentpage ={setCurrentPage} />
    <div>
      {currentPage === 'home' && <Home/>}
      {currentPage === 'contact' && <Contact/>}
      {currentPage === 'about' && <About/>}
    </div>
    <Footer />
  </div>
  )
}

export default App


