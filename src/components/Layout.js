import { makeStyles } from '@material-ui/core/styles'

import Sidebar from './Navbar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 50,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  )
}

export default Layout
