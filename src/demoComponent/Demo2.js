import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

/* const Demo = (props) => {
    return <div className="maindiv_style">
        <h1>Hello {props.name}</h1>
        <p> This is paragraph</p>
    </div>
} */

const Demo = ({name}) => {
    return <div className="maindiv_style">
        <h1>Hello {name}</h1>
        <p> This is paragraph</p>
    </div>
}

export default Demo;
