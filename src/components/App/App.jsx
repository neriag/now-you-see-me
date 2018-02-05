import React, { Component } from 'react'; 
import axios from 'axios';

import './App.css';
import Filters from './Filters';
import MovieDetails from './MovieDetails';

class App extends Component {
  constructor (props) {
    super(props);
    let url = 'http://localhost:3001/random';
    this.state = {chosenMovie:{title:""}};
    axios.get(url).then((response)=> {
        this.setState({chosenMovie:response.data});   
    })
    .catch(console.log);
  }

  render() {
    return (
      <div>
        <Filters />
        <br />
        <MovieDetails movie={this.state.chosenMovie}/>
      </div>
    );
  }
}

export default App;
