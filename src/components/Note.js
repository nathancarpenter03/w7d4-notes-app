import React from 'react'

class Note extends React.Component {


    render() {
        return <div>
            <div className="media">
                <a href="#">
                    <img className="media-object" src="//placehold.it/16x9"/>
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Media heading 1</h4>
                    This is the alternate Title so place it carefully
                </div>
            </div> 
        </div>
    }
}

export default Note