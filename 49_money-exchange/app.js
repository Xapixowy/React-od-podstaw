const Form = (props) => {
   return (
      <form>
         <label>
            Wybierz przelicznik:
            <select value={props.type} onChange={props.selectHandler}>
               <option value="pln">Złoty</option>
               <option value="diesel">Paliwo (Diesel)</option>
            </select>
         </label>
         <label>
            <input type="number" step={0.01} value={props.value} onInput={props.inputHandler} />{' '}
            <span>{props.unit}</span>
         </label>
      </form>
   );
};

const SingleCurrency = (props) => (
   <label>
      {props.code}: <input size={10} type="text" disabled value={props.value} />
   </label>
);

const Display = (props) => {
   let sourceRatio;
   if (props.type === 'pln') sourceRatio = props.currencies;
   else if (props.type === 'diesel') sourceRatio = props.petrol;
   const items = sourceRatio.map((item) => (
      <SingleCurrency key={item.code} code={item.code} value={(props.value * item.ratio).toFixed(2)} />
   ));
   return <div>{items}</div>;
};

const Exchange = (props) => {
   return (
      <>
         <h1>Formularz</h1>
         <Form
            value={props.value}
            unit={props.unit}
            selectHandler={props.selectHandler}
            inputHandler={props.inputHandler}
         />
         <h1>Wynik</h1>
         <Display value={props.value} type={props.type} currencies={props.currencies} petrol={props.petrol} />
      </>
   );
};

class App extends React.Component {
   state = {
      value: 0,
      values: {
         eur: 0,
         usd: 0,
         pln: 0,
      },
      type: 'pln',
      unit: 'złotych',
   };

   currencies = [
      { code: 'EUR', ratio: 0.22 },
      { code: 'USD', ratio: 0.24 },
      { code: 'PLN', ratio: 1 },
      { code: 'SZL', ratio: 3.49 },
   ];

   petrol = [
      { code: 'EUR', ratio: 1.705 },
      { code: 'USD', ratio: 1.86 },
      { code: 'PLN', ratio: 7.75 },
      { code: 'SZL', ratio: 25.045 },
   ];

   handleTypeChange(e) {
      this.setState({ type: e.target.value });
      if (e.target.value === 'pln') this.setState({ unit: 'złotych' });
      else if (e.target.value === 'diesel') this.setState({ unit: 'litrów' });
   }

   handleValueChange(e) {
      const value = parseFloat(e.target.value) <= 0 ? 0 : parseFloat(e.target.value);
      this.setState({ value: value });
   }

   render() {
      return (
         <Exchange
            value={this.state.value}
            values={this.state.values}
            type={this.state.type}
            unit={this.state.unit}
            currencies={this.currencies}
            petrol={this.petrol}
            selectHandler={this.handleTypeChange.bind(this)}
            inputHandler={this.handleValueChange.bind(this)}
         />
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
