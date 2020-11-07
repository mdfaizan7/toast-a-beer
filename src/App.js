import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Feed from './pages/Feed'
import Dashboard from './pages/Dashboard'

const useStyles = makeStyles({
  app: {
    fontFamily: 'Open Sans',
  },
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Router>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
