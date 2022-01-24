import React, {Component} from 'react';

class Controller extends Component {
    shouldComponentUpdate(newProps, newState){
        return false;
    }
    render(){
        console.log("==============> Controller");
        return(
            <ul>
                <li><a href="#" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode("create");
                }.bind(this)}>create</a></li>
                <li><a href="#" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode("read");
                }.bind(this)}>read</a></li>
                <li><button>delete</button></li>
            </ul>
        )
    }
}

export default Controller;