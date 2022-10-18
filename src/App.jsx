import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users }));  
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
        
    <div className='flex-col text-center p-8 bg-white'>
        <h1 className='text-8xl text-indigo-400 font-bold mb-8'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
    </div>
    )
  }
}

export default App