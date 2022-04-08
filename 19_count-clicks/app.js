const MathButton = (props) => {
   return <button onClick={() => props.click(props.type, props.number)}>{props.text}</button>;
};

const MathDisplay = (props) => {
   props.clicks === 10 && alert('Osiągnąłeś 10 kliknięć!');
   return (
      <>
         <h1>Liczba kliknięć: {props.clicks}</h1>
         <h2>Wynik: {props.result}</h2>
      </>
   );
};

class Counter extends React.Component {
   state = {
      clicks: 0,
      result: this.props.result,
   };
   handleButton = (type = 'reset', number = 0) => {
      if (type === 'reset') {
         this.setState(() => ({
            clicks: 0,
            result: this.props.result,
         }));
      } else {
         if (type === 'addition') {
            this.setState((prevState) => ({
               result: prevState.result + number,
            }));
         } else if (type === 'subtraction') {
            this.setState((prevState) => ({
               result: prevState.result - number,
            }));
         }
         this.setState((prevState) => ({
            clicks: ++prevState.clicks,
         }));
      }
   };
   render() {
      return (
         <>
            <MathButton text="-10" number={10} type="subtraction" click={this.handleButton} />
            <MathButton text="-1" number={1} type="subtraction" click={this.handleButton} />
            <MathButton text="Reset" type="reset" click={this.handleButton} />
            <MathButton text="+1" number={1} type="addition" click={this.handleButton} />
            <MathButton text="+10" number={10} type="addition" click={this.handleButton} />
            <MathDisplay clicks={this.state.clicks} result={this.state.result} />
         </>
      );
   }
}

ReactDOM.render(<Counter result={0} />, document.getElementById('root'));
