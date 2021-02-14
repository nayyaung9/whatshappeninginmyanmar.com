import React from "react"
import { Container, Divider } from "@material-ui/core"

const Footer = () => {
  return (
    <Container style={{ marginTop: 40 }}>
      <Divider />
      <footer className="text-center p2">
        © {new Date().getFullYear()}, Fight for Democracy in Myanmar
      </footer>
    </Container>
  )
}

export default Footer
