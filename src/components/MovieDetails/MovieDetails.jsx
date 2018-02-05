import React from 'react'

export default class MovieDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.state.name ='Now You See Me';
    }
    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
        </div>
        )
    }
}