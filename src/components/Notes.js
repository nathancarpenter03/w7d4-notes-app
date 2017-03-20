import React from 'react';
import { connect } from 'react-redux';

// Load components
import Navbar from './Navbar';
import Note from './Note'

class Notes extends React.Component {

    // Setup

    // React lifecycle methods

    // API methods

    // Required render method, runs initially and then again after any state changes

    render() {

        // Return our Layout, wrapped around AddTodo and array of Todo components
        return <div>
            <Navbar />
            <div className="container notes-list-container notes-container">
                <div className="row">
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                 </div>
            </div>
        </div>    
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Notes)
