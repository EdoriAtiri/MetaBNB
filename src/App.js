import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Partials/Header'
import Home from './Pages/Home'
import Places from './Pages/Places'
import Footer from './Partials/Footer'
import ConnectWallet from './Components/ConnectWallet'

function App() {
  const [ConnectPopup, setConnectPopup] = useState(false)

  const handleConnectClick = () => {
    setConnectPopup((prevStatus) => !prevStatus)
    console.log(ConnectPopup)
  }
  return (
    <Router>
      <div className="relative w-full font-redRose font-normal text-meta-grey">
        <Header handleConnectClick={handleConnectClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
        <Footer />
        {ConnectPopup && <ConnectWallet />}
      </div>
    </Router>
  )
}

export default App
