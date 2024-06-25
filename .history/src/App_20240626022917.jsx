import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Login from './accounts/Login'
import Registration from './accounts/Registration'
import Listing from './pages/Listing'
import ListingDetail from './pages/ListingDetail'




const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Listing" element={<Listing />} />
          <Route path="ListingDetail" element={<ListingDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;