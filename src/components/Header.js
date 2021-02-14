import React from "react"
import {
  makeStyles,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#fff",
    color: "#000",
    boxShadow: "0 0 9px 3px rgba(41,41,41,.25)",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Poppins",
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Container>
          <Toolbar>
            <Avatar
              src="https://cdn.discordapp.com/attachments/806954042042613840/810073140410449930/logo2-01-01_1.png"
              className={classes.menuButton}
            />
            <Typography variant="h6" className={classes.title}>
              Myanmar News
            </Typography>
            <Button color="inherit">Resistance</Button>
            <Button color="inherit">Map</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
