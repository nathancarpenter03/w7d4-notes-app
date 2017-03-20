import React from 'react';
import { browserHistory } from 'react-router';

class Navbar extends React.Component {

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><span className="nav-brand">Noted</span></a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#" onClick={() => browserHistory.push('/add')}><span className="nav-routes">Add Note</span></a></li>
                    <li><a href="#" onClick={() => browserHistory.push('/')}><span className="nav-routes">Your Notes</span></a></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar

