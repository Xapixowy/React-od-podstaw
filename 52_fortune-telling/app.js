class App extends React.Component {
   state = {
      currentOmen: null,
      newOmen: '',
   };

   omens = ['Jesteś fujarką :P', 'Dasz radę!', 'Myślę, że nie :('];

   handleOmenDrawButton = () => {
      const number = Math.floor(Math.random() * this.omens.length);
      console.log(number);
      this.setState({ currentOmen: this.omens[number] });
   };

   handleNewOmenInput = (e) => {
      this.setState({ newOmen: e.target.value });
   };

   handleOmenAddButton = () => {
      this.omens.push(this.state.newOmen);
      this.setState({ newOmen: '' });
      console.log(this.omens);
   };

   render() {
      return (
         <div>
            <p>
               <button onClick={this.handleOmenDrawButton}>Zobacz wróżbę</button>
            </p>
            <p>
               <input type="text" value={this.state.newOmen} onChange={this.handleNewOmenInput} />
               <button onClick={this.handleOmenAddButton}>Dodaj wróżbę</button>
            </p>
            {this.state.currentOmen ? <h1>{this.state.currentOmen}</h1> : null}
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
