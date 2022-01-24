import React, {Component} from 'react';

class Create extends Component {
    shouldComponentUpdate(){
        return false;
    }
    render(){
        console.log("==============> create");
        return(
            <form action="/create" method="post" onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}>
                <ul>
                    <li>
                        <input type="text" name="title" placeholder="title"></input>
                    </li>
                    <li>
                        <textarea name="desc" placeholder="desc"></textarea>
                    </li>
                    <li>
                        <input type="submit" value="작성"></input>
                    </li>
                </ul>
            </form>
        )
    }
}

export default Create;