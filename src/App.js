import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'

import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField:'',
        }
    }
    componentDidMount() {
        fetch(' http://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(data => {
              this.setState({monsters: data})
              
      })
 
          
    }
    render() {
        const {monsters,searchField}=this.state
        let filteredMonsters=monsters
        if (this.state.searchField){
          console.log('searchField=',searchField)
          console.log('monsters=',monsters)
          filteredMonsters=monsters.filter(monster=>{
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
          })
          console.log("filteredMonsters=",filteredMonsters)
        }else{
          filteredMonsters=this.state.monsters
        }

        return ( 
          <div className = "App" >
            <input type = "search" placeholder="search-monster" onChange={e=>this.setState({searchField:e.target.value}) } />
            <CardList monsters = { filteredMonsters }/>


            </div>
        );
    }
}

export default App;