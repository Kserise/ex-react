import React, {Component} from 'react';

class Header extends Component {
    shouldComponentUpdate(newProps){
        if(newProps.data.length == this.props.data.length){
            return false;
        }
        return true;
    }
    render(){
        console.log("=====================>Header....");
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href="#" data-id={data[i].id} onClick={function(id, e){
                e.preventDefault();
                this.props.onChangePage(id);
            }.bind(this, data[i].id)}>{data[i].title}</a></li>)
            i++;
        }
        return(
            <header>
                <h1>여기는 헤더라고해요</h1>
                <nav>
                    <ul>
                        {lists}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;