import React from 'react';
import axios from 'axios';
import './App.css';
import FollowerCards from './Components/FollowerCards';
import UserCard from './Components/UserCard';

class App extends React.Component {

    state = {
      user:  [],
      followers: []
    }

  componentDidMount() {
    axios.all([
      axios.get('https://api.github.com/users/cmruss'),
      axios.get('https://api.github.com/users/cmruss/followers')
    ])
      .then(axios.spread((userRes, followerRes) =>{
        console.log(userRes)
        console.log(followerRes)
        this.setState({user : userRes.data})
        this.setState({followers : followerRes.data})
      }))
  }

  render(){
    return (
      <div className="App">
        <UserCard user={this.state.user}/>
        <FollowerCards followers={this.state.followers}/>
      </div>
    );
  }

}

export default App;
