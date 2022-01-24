import React, {Component} from 'react';
import Header from './Component/Header';
import Section from './Component/Section';
import Controller from './Component/Controller';
import Create from './Component/Create';
import Footer from './Component/Footer';
class App extends Component {
  constructor(props){
    super(props);
    this.max_headerLangth = 3;
    this.state = {
      mode:"welcome",
      select_id:2,
      header : [
        {id:1, title:"HTML", desc:"html is hypertext markup languege"},
        {id:2, title:"CSS", desc:"css is design"},
        {id:3, title:"js", desc:"javascript is interaction"}
      ],
      section : {
        title:'section', desc:'this area is in contents'
      },
      footer : [
        {id:1, title:'instagram'},
        {id:2, title:'twitter'},
        {id:3, title:'facebook'}
      ]
    }
  }
  render(){
    let _title, _desc, _Component = null;
    if(this.state.mode === "welcome"){
      _title = "안녕하세요";
      _desc = "반갑습니다.";
    }else if(this.state.mode === "read"){
      let i = 0;
      while(i < this.state.header.length){
        let data = this.state.header[i];
        if(data.id == this.state.select_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _Component = <Section title={_title} desc={_desc}></Section>
    }else if(this.state.mode === "create"){
      _Component = <Create onSubmit={function(_title, _desc){
          this.max_headerLangth++;
          let update = this.state.header.concat({
            id:this.max_headerLangth, title:_title, desc:_desc
          });
          this.setState({
            header:update
          });
        }.bind(this)}></Create>
    }
    return(
      <div className="App">
        <Header data={this.state.header} onChangePage={function(_id){
          this.setState({
            mode:'read',
            select_id:_id
          })
        }.bind(this)}></Header>
        <Controller onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Controller>
        {_Component}
        <Footer data={this.state.footer}></Footer>
      </div>
    )
  }
}

export default App;
