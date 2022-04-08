const Person = (props) => {
   return (
      <li>
         {props.text} <button onClick={props.deleteHandler}>Usuń</button>
      </li>
   );
};

class App extends React.Component {
   state = {
      persons: ['Kyle Obrien', 'Alexis Rasmussen', 'Miles Vaughan', 'Sophie Cole', 'Cameron Hoover', 'Coleman Shea'],
   };

   deleteHandler(index) {
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({ persons });
   }

   render() {
      const listItems = this.state.persons.map((person, index) => (
         <Person key={person} text={person} deleteHandler={this.deleteHandler.bind(this, index)} />
      ));
      return <ul>{listItems}</ul>;
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
