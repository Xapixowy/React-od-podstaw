import React, { Component } from 'react';
import './App.css';

const data = [
   { id: 1, title: 'Wiadomość nr 1', body: 'Zawartość wiadomości numer 1...' },
   { id: 2, title: 'Wiadomość nr 2', body: 'Zawartość wiadomości numer 2...' },
   { id: 3, title: 'Wiadomość nr 3', body: 'Zawartość wiadomości numer 3...' },
];

setInterval(() => {
   const index = data.length + 1;
   data.push({ id: index, title: `Wiadomość nr ${index}`, body: `Zawartość wiadomości numer ${index}...` });
}, 5000);

class App extends Component {
   state = {
      comments: [...data],
   };

   intervals = [];

   getData = () => {
      if (this.state.comments.length !== data.length) {
         this.setState({
            comments: [...data],
         });
      }
   };

   componentDidMount() {
      this.intervals.push(setInterval(this.getData, 1000));
   }

   componentWillUnmount() {
      for (const interval in this.intervals) clearInterval(interval);
   }

   render() {
      const comments = this.state.comments.map((item) => (
         <div key={item.id} className="comment">
            <h1>{item.title}</h1>
            <p>{item.body}</p>
         </div>
      ));
      return <div className="App">{comments.reverse()}</div>;
   }
}

export default App;
