import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from '../pages/Index.jsx'
import Game from '../pages/Game.jsx'
import Layout from './Layout.jsx'

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/game/:gameId" component={Game} />
        </Switch>
      </BrowserRouter>
    </Layout>

  )
}

export default App
