// mui stuff
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from './Sidebar'
// store
import userStore from '../store'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 60,
    minHeight: '100vh',
    fontFamily: 'Open Sans',
  },
}))

const Layout = ({ children }) => {
  const darkMode = userStore(state => state.darkMode)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Sidebar />
      <main
        className={classes.content}
        style={{ background: darkMode ? '#212121' : '#f5f5f5' }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
