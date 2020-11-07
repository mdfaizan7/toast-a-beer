import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import Feed from './pages/Feed'

import './styles/App.scss'

function App() {
  return (
    <div className='App'>
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Feed} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  )
}

export default App
