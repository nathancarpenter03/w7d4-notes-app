import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Load components
import Navbar from './Navbar';

class Add extends React.Component {

    // Setup
   
    // React lifecycle methods

    // API methods

    // Required render method, runs initially and then again after any state changes

    render() {
        return <div>
            <Navbar />
                <div className="well">
                    <form>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input type="text" className="form-control" id="tags" placeholder="Tags (seperate by commas)"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">URL</label>
                            <input type="text" className="form-control" id="url" placeholder="URL"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="note">Note</label> <br/>
                            <textarea className="form-control" rows="5" id="note" placeholder="Note..."></textarea>
                        </div>
                        <button className="btn btn-default add-btn" type="button" onClick={()=> this.onClick(this.props.addTodo)}>Add</button>
                    </form>
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
export default connect(mapStateToProps)(Add)
