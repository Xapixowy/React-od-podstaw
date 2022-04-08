const Display = (props) => <h1>{props.text}</h1>;

class App extends React.Component {
   state = {
      text: '',
   };
   handleClick() {
      const min = this.props.min;
      const max = this.props.max;
      let number = Math.floor(Math.random() * (max - min + 1)) + min;

      this.setState((prevState) => ({ text: prevState.text + number }));
   }
   render() {
      return (
         <>
            <button onClick={this.handleClick.bind(this)}>{this.props.btnName}</button>
            <Display text={this.state.text} />
         </>
      );
   }
}

ReactDOM.render(<App btnName={'Siehehema'} min={0} max={9} />, document.getElementById('root'));
