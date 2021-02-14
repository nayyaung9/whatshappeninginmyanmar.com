import React from "react"
import {
  makeStyles,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core"
import MoreIcon from "@material-ui/icons/MoreVert"

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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function Header() {
  const classes = useStyles()

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <a
          href="http://mmcoup.netlify.app/"
          target="_blank"
          className="linkHref_as_text"
        >
          Resistance
        </a>
      </MenuItem>
      <MenuItem>
        <a
          href="http://mmcoup.netlify.app/"
          target="_blank"
          className="linkHref_as_text"
        >
          Map
        </a>
      </MenuItem>
    </Menu>
  )

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

            <div className={classes.root} />
            <div className={classes.sectionDesktop}>
              <a
                href="http://mmcoup.netlify.app/"
                target="_blank"
                className="linkHref_as_text"
              >
                Resistance
              </a>
              <a
                href="http://mmcoup.netlify.app/"
                target="_blank"
                className="linkHref_as_text"
              >
                Map
              </a>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls="whs"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}
