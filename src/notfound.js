import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Notfound extends Component {
    render() {
        return (
            <div className="Banner" style={{textAlign: 'center'}}>
                <h1>404</h1>
                <p>Not Found! Back to <Link to="/">Home</Link></p>
            </div>
        );
    }
}

export default Notfound;
