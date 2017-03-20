// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import Notes from './components/Notes';
import Add from './components/Add';
// import Edit from './components/Edit'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Notes} />
                <Route path="/add" component={Add}/>
         
            </Router>
        </Provider>
    }
}

export default Routes

    //    <Route path="/edit" component={Edit} /> 
    // Goes below notes path 