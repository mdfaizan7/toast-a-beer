import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// pages
import Feed from './pages/Feed'
import Dashboard from './pages/Dashboard'
// store
import userStore from './store'

function App() {
  const darkMode = userStore(state => state.darkMode)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
    typography: {
      fontFamily: 'Open Sans',
      color: darkMode ? '#fff' : '#111',
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
