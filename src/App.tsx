import Header from "components/Header"
import Details from "pages/Details"
import Home from "pages/Home"
import NewsDetail from "pages/NewsDetail"
import React from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":category/:category" element={<Details />} />
            <Route path="news/:detail" element={<NewsDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
