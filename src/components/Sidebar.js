import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
// mui
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
// icons
import {
  MdMenu,
  MdDashboard,
  MdHome,
  MdBrightnessHigh,
  MdBrightness4,
} from 'react-icons/md'

import bg from '../images/sidebar-bg.png'
// store
import userStore from '../store'

const drawerWidth = 270

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(0deg, rgba(25,25,25,0.8) -10%, rgba(25,25,25,0.8) 100%), url(${bg})`,
    objectFit: 'contain',
  },
  btn: {
    display: 'block',
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'left',
    width: '100%',
    textTransform: 'none',
    color: '#fff',
    textDecoration: 'none',
  },
  btnText: {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 700,
  },
  btnIcon: {
    color: '#fff',
    verticalAlign: 'middle',
    objectFit: 'contain',
    fontSize: 25,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 10,
    marginTop: 5,
  },
  sidebarTitle: {
    marginLeft: 13,
    fontSize: 22,
  },
}))

const ResponsiveDrawer = ({ window, match }) => {
  const classes = useStyles()
  const location = useLocation()
  const theme = useTheme()
  const { darkMode, toggleDarkMode } = userStore()

  const [mobileOpen, setMobileOpen] = useState(false)

  const page = location.pathname === '/' ? 'Feed' : 'Dashboard'

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.title}>🍻 Toast A Beer</div>
      <div className={classes.toolbar} />
      <Link
        className={classes.btn}
        style={{ color: page === 'Feed' ? '#1976d2' : '#fff' }}
        to='/'
      >
        <Typography className={classes.btnText}>
          <MdHome
            className={classes.btnIcon}
            style={{ color: page === 'Feed' ? '#1976d2' : '#fff' }}
          />
          <span className={classes.sidebarTitle}>Feed</span>
        </Typography>
      </Link>
      <Link
        className={classes.btn}
        style={{ color: page === 'Dashboard' ? '#1976d2' : '#fff' }}
        to='/dashboard'
      >
        <Typography className={classes.btnText}>
          <MdDashboard
            className={classes.btnIcon}
            style={{ color: page === 'Dashboard' ? '#1976d2' : '#fff' }}
          />
          <span className={classes.sidebarTitle}>Dashboard</span>
        </Typography>
      </Link>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <CssBaseline />
      <AppBar
        className={classes.appBar}
        style={{ background: darkMode ? '#333' : '#1976d2', flexGrow: 1 }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MdMenu style={{ color: '#fff' }} />
          </IconButton>
          <Typography style={{ fontSize: 28, color: '#fff' }}>
            {page}
          </Typography>

          <div style={{ marginLeft: 'auto' }}>
            <Tooltip edge='end' title='Toggle dark/light theme'>
              <IconButton onClick={toggleDarkMode} style={{ color: '#fff' }}>
                {darkMode ? <MdBrightnessHigh /> : <MdBrightness4 />}
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default ResponsiveDrawer
