import React from 'react';
import axios from 'axios';
import './App.css';
import FollowerCards from './Components/FollowerCards';
import UserCard from './Components/UserCard';
import SearchForm from './Components/SearchForm';

class App extends React.Component {

    state = {
      user:  [],
      followers: [],
      userInput: ''
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
    }
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  fetchUser = event => {
    event.preventDefault();
    axios.all([
      axios.get(`https://api.github.com/users/${this.state.userInput}`),
      axios.get(`https://api.github.com/users/${this.state.userInput}/followers`)
    ])
      .then(axios.spread((userRes, followerRes) =>{
        console.log(userRes)
        console.log(followerRes)
        this.setState({user : userRes.data})
        this.setState({followers : followerRes.data})
      }));
    this.setState({
      userInput: ''
    })
  };

  render(){
    return (
      <div className="App">
        <SearchForm 
          userInput={this.state.userInput} 
          handleChange={this.handleChange}
          fetchUser={this.fetchUser}
        />
        <UserCard user={this.state.user}/>
        <FollowerCards followers={this.state.followers}/>
      </div>
    );
  }

}

export default App;
