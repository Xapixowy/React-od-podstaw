import React, { Component } from 'react';
import './App.css';

class App extends Component {
   state = {
      users: [],
   };

   getData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
      xhr.onload = () => {
         if (xhr.status === 200) {
            const users = JSON.parse(xhr.response);
            this.setState({ users });
         }
      };
      xhr.send();
   };

   componentDidMount() {
      setTimeout(this.getData, 3500);
   }

   render() {
      const users = this.state.users.map((user) => (
         <div key={user.id} className="user">
            <h2>
               <span style={{ color: 'blue' }}>{user.id}. </span>
               {user.name}
            </h2>
            <p>
               <strong>Address:</strong> {user.address.zipcode} {user.address.city}, {user.address.street}{' '}
               {user.address.suite}
            </p>
            <p>
               <strong>Phone:</strong> {user.phone}
            </p>
            <p>
               <strong>E-mail:</strong> {user.email}
            </p>
         </div>
      ));
      return (
         <div className="app">
            <h1>Users</h1>
            {users.length === 0 ? <p style={{ color: 'yellow' }}>Czekam na dane!</p> : users}
         </div>
      );
   }
}

export default App;
