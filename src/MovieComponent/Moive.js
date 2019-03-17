import React, { Component } from 'react';

import MoviePoster from './MoviePoster';

class Moive extends Component {
    render() {
        return(
            <div>
                <h1>This is a movie</h1>
                <MoviePoster/>
            </div>
        );
    }
}

export default Moive;

