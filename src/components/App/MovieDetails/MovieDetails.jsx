import React from 'react'
import axios from 'axios'

export default function MovieDetails(props) {
    return (
    <div>
        <h1>{props.movie.title}</h1>
    </div>
    )
}