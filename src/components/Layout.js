import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Container, Toolbar } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Toolbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
