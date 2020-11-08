import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// pages
import Feed from './pages/Feed'
import Dashboard from './pages/Dashboard'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
})

function App() {
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
