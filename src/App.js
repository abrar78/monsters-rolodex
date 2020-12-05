import React, { Component } from 'react'
import {CardList} from './components/card-list/card-list.component'

import './App.css';

class App extends Component  {
  constructor(){
    super();
    this.state={
     monsters:[]
    }
  }
  componentDidMount(){
    fetch(' http://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>this.setState({
      monsters:data
    }))
  }
  render(){
  return (
    <div className="App">
        {console.log(this.state)}
       <CardList monsters={this.state.monsters}/>

              
    </div>
  );
}
}

export default App;
