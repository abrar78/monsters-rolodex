import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        }
    }
    componentDidMount() {
        fetch(' https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(data => {
                this.setState({ monsters: data })
            })
    }
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { monsters, searchField } = this.state
        let filteredMonsters =[]
        if (this.state.searchField) {
            console.log('searchField=', searchField)
            console.log('monsters=', monsters)
            filteredMonsters = monsters.filter(monster => {
                return monster.name.toLowerCase().includes(searchField.toLowerCase())
            })
            console.log("filteredMonsters=", filteredMonsters)
        } else {
            filteredMonsters = this.state.monsters
        }

        return ( <div className = "App" >
        <h1 style={{color:'rgba(0, 128, 128, 1)'}}>Monster Rolodex</h1>
            <SearchBox handleChange = { this.handleChange }/> 
            <CardList monsters = { filteredMonsters } />
             </div >
        );
    }
}

export default App;