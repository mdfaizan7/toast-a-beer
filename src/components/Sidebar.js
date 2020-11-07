import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { MdMenu, MdDashboard, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

import bg from '../images/beer-sidebar.png'

const drawerWidth = 270

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: '#fff',
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
    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) -10%, rgba(0,0,0,0.6) 0%), url(${bg})`,
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
    fontSize: 22,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 10,
    marginTop: 5,
  },
}))

const ResponsiveDrawer = ({ window, match }) => {
  const classes = useStyles()
  const location = useLocation()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const page = location.pathname === '/' ? 'Feed' : 'Dashboard'

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.title}>Toast A Beer</div>
      <div className={classes.toolbar} />
      <Link
        className={classes.btn}
        style={{ backgroundColor: page === 'Feed' ? '#64b5f6' : 'transparent' }}
        to='/'
      >
        <div className={classes.btnText}>
          <MdHome className={classes.btnIcon} />
          <span style={{ marginLeft: 13 }}>Feed</span>
        </div>
      </Link>
      <Link
        className={classes.btn}
        style={{
          backgroundColor: page === 'Dashboard' ? '#64b5f6' : 'transparent',
        }}
        to='/dashboard'
      >
        <div className={classes.btnText}>
          <MdDashboard className={classes.btnIcon} />
          <span style={{ marginLeft: 13 }}>Dashboard</span>
        </div>
      </Link>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MdMenu color='black' />
          </IconButton>
          <div style={{ color: '#111', fontSize: 28 }}>{page}</div>
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
