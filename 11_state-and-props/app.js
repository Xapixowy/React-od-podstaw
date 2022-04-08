// const ListItem = (props) => {
//    return <li>{props.item}</li>;
// };

class ListItem extends React.Component {
   render() {
      return <li>{this.props.item}</li>;
   }
}

class ShoppingList extends React.Component {
   state = {
      item1: 'ogórki',
      item2: 'sok',
      item3: 'fanta',
   };
   render() {
      return (
         <>
            <h1>Lista zakupów:</h1>
            <ul>
               <ListItem item={this.state.item1} />
               <ListItem item={this.state.item2} />
               <ListItem item={this.state.item3} />
            </ul>
         </>
      );
   }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));
