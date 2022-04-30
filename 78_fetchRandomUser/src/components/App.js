import React, { Component } from 'react';
import './App.css';
import User from './User';
import Button from './Button';

class App extends Component {
   state = {
      users: [],
   };

   getNewUser = () => {
      let newUser = {};
      const users = [...this.state.users];
      fetch('https://randomuser.me/api/')
         .then((response) => {
            if (response.ok) return response.json();
            else throw Error(response.status);
         })
         .then((data) => (newUser = data.results[0]))
         .then(() => {
            users.push(newUser);
            this.setState({ users });
         })
         .catch((error) => console.log(error));
   };

   render() {
      const users = this.state.users.map((user, index) => <User key={index} user={user} />);
      return (
         <div className="app">
            <Button class="addNewUser" onClick={this.getNewUser} text="Dodaj użytkownika" />
            <div>
               {this.state.users.length === 0 ? (
                  <span style={{ color: 'yellow' }}>Brak użytkowników!</span>
               ) : (
                  users.reverse()
               )}
            </div>
         </div>
      );
   }
}

export default App;
