import React from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
  Typography,
  Container,
  Grid,
  Box,
} from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import PageviewIcon from "@material-ui/icons/Pageview"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { DisplayOnMobile } from "./styled";

const ListItemLink = (props) => <ListItem button component={GatsbyLink} {...props} />

const PersistentDrawerLeft = () => {
  const { site: {siteMetadata: {title, paths}}} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            paths {
              path,
              text
            }
          }
        }
      }
    `
  )

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  console.log(DisplayOnMobile);

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <DisplayOnMobile>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </DisplayOnMobile>
          <h5>{title}</h5>
        </Toolbar>
      </AppBar>
      <DisplayOnMobile>
        <Drawer variant="persistent" anchor="right" open={open}>
          <>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </>
          <Divider />
          <List>
            {paths.map((path) => (
              <ListItemLink key={path.path} to={path.path}>
                <ListItemIcon>
                  <PageviewIcon color='secondary' />
                </ListItemIcon>
                <ListItemText primary={<Typography color={'secondary'}>{path.text}</Typography>} />
              </ListItemLink>
            ))}
          </List>
        </Drawer>
      </DisplayOnMobile>
    </>
  )
}

export default ({ children }) => (
  <Container disableGutters={true}>
    <PersistentDrawerLeft />
    <Grid container alignContent={'center'} direction={'column'} spacing={2}>
      {children}
    </Grid>
  </Container>
)
