import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
class Demo extends Component{

    render(){
        return <div className ="maindiv_style">
        <h1>Hello {this.props.name} World..!</h1>
        <p>this is paragraph</p>
        </div>
    }
}

export default Demo;

/* props get passed to the Component
props are immutable (cannot be changed / modified)
props - functional Component
this.props - class components */