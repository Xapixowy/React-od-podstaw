const Button = (props) => {
   if (props.type === 'add') {
      return (
         <button
            disabled={props.itemsInCart === props.itemsAvailable || props.itemsAvailable === 0 ? true : false}
            onClick={props.click}
         >
            {props.text}
         </button>
      );
   } else if (props.type === 'remove') {
      return (
         <button disabled={props.itemsInCart === 0 ? true : false} onClick={props.click}>
            {props.text}
         </button>
      );
   } else if (props.type === 'buy') {
      return (
         <button disabled={props.itemsAvailable === 0 ? true : false} onClick={props.click}>
            {props.text}
         </button>
      );
   } else return <button>{props.text}</button>;
};

const Display = (props) => (
   <span style={props.itemsInCart === 0 ? { color: '#000' } : { color: '#fff' }} id="display">
      {props.text}
   </span>
);

class App extends React.Component {
   state = {
      itemsAvailable: 9,
      itemsInCart: 0,
   };

   handleItemsCountChange = (type) => {
      if (this.state.itemsAvailable > 0) {
         if (type === 'add') {
            this.setState((prevState) => ({
               itemsInCart: prevState.itemsInCart + 1,
            }));
         } else if (type === 'remove') {
            this.setState((prevState) => ({
               itemsInCart: prevState.itemsInCart - 1,
            }));
         }
      }
   };

   handleBuyButton = () => {
      if (this.state.itemsAvailable > 0) {
         this.setState((prevState) => ({
            itemsAvailable: prevState.itemsAvailable - prevState.itemsInCart,
            itemsInCart: 0,
         }));
      }
   };

   render() {
      let buyButton;
      if (this.state.itemsInCart !== 0) {
         buyButton = (
            <Button text="Kup" type="buy" click={this.handleBuyButton} itemsAvailable={this.state.itemsAvailable} />
         );
      }

      const { itemsInCart, itemsAvailable } = this.state;

      return (
         <>
            <Button
               text="-"
               type="remove"
               click={this.handleItemsCountChange.bind(this, 'remove')}
               itemsInCart={itemsInCart}
            />
            <Display itemsInCart={itemsInCart} text={itemsInCart} />
            <Button
               text="+"
               type="add"
               click={this.handleItemsCountChange.bind(this, 'add')}
               itemsInCart={itemsInCart}
               itemsAvailable={itemsAvailable}
            />
            {buyButton}
         </>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
