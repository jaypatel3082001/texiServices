import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contents from './components/Contents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Contents />
    <Footer />
    </>
  )
}

export default App
