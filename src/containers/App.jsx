import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
        
    <div className='flex-col text-center p-8 bg-white'>
        <h1 className='text-8xl text-indigo-400 font-bold mb-8'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
                <CardList robots={filteredRobots} />
            </ErrorBoundary>
        </Scroll>
    </div>
    )
  }
}

export default App