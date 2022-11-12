import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Partials/Header'
import Home from './Pages/Home'
function App() {
  return (
    <Router>
      <div className="App w-full font-redRose font-normal text-meta-grey">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
