import React from 'react'

import Filter from "./Filter";

export default class Filters extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <ul>
        <li><Filter label="Genre" options={['horror', 'drama']}/></li>
        <li><Filter label="Year" options={['2017', '2018']}/></li>
        <li><Filter label="Rating" options={[">7",">8"]}/></li>
        <button>Submit</button>
    </ul>)
    }
}