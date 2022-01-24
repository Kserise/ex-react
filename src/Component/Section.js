import React, {Component} from 'react';

class Section extends Component {
    render(){
        return(
            <section>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </section>
        )
    }
}

export default Section;