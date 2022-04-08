class App extends React.Component {
   state = {
      value: '',
   };

   handleInputChange = (e) => {
      console.log(e.target.value);
      this.setState({ value: e.target.value });
   };

   handleReset = (e) => {
      this.setState({ value: '' });
   };

   render() {
      return (
         <>
            <input
               value={this.state.value}
               placeholder="type something..."
               onChange={this.handleInputChange}
               type="text"
            />
            <button onClick={this.handleReset}>Reset</button>
            <h1>{this.state.value.toUpperCase()}</h1>
         </>
      );
   }
}
ReactDOM.render(<App />, document.getElementById('root'));
