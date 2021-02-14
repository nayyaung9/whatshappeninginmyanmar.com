import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Container, Toolbar } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Toolbar />

      <div className="app_banner" />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
