import React, { Component } from 'react';
import './App.css';
import Word from './Word';

class App extends Component {
   state = {
      words: [],
   };

   fetchData = () => {
      fetch('data/words.json')
         .then((response) => response.json())
         .then((data) => {
            this.setState({
               words: data.words,
            });
         });
   };

   componentDidMount() {
      setTimeout(this.fetchData, 5000);
   }

   render() {
      const words = this.state.words.map((word) => <Word key={word.id} en={word.en} pl={word.pl} />);
      return (
         <div className="app">
            <h1>English animals</h1>
            {words.length === 0 ? <p style={{ color: 'yellow' }}>Czekam na dane!</p> : words}
         </div>
      );
   }
}

export default App;
