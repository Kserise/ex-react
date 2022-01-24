import React, {Component} from 'react';

class Footer extends Component {
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href="#">{data[i].title}</a></li>);
            i++;
        }
        return(
            <footer>
                <h2>여기는 푸터</h2>
                <ul>
                    {lists}
                </ul>
            </footer>
        )
    }
}

export default Footer;