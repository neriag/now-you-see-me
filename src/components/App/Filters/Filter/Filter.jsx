import React from 'react'

export default function Filter(props) {
    return (
        <div>
            <label>{props.label}</label>&nbsp;
            <select>
                {props.options.map(option => <option key={option}>{option}</option>)}
            </select>
        </div>
    );
}