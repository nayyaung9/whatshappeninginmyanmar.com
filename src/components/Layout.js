import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Toolbar } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Toolbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
