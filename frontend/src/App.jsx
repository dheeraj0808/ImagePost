import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/Feed'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">📸 ImagePost</div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Feed</NavLink>
          <NavLink to="/create" className="nav-link">Create Post</NavLink>
        </div>
      </nav>

      {/* Pages */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App