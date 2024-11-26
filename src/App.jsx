import { Component, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import { Home } from "./pages/home"
import { OnlineCoachingClass11 } from "./pages/class11Neet"
import { OnlineCoachingClass12 } from "./pages/class12Neet"
import { Error404 } from "./pages/error404"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import "./App.css"


function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<OnlineCoachingClass11 />} />
          <Route path="/neet/online-coaching-class-12" element={<OnlineCoachingClass12 />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {

  return <div>
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
  </div>
}


export default App
