class App extends React.Component {
   state = {
      items: [
         { id: 1, name: 'herbata', price: 5, active: true },
         { id: 2, name: 'ziemniaki', price: 3, active: false },
         { id: 3, name: 'kasza', price: 4, active: false },
         { id: 4, name: 'zupa wodna', price: 10, active: false },
         { id: 5, name: 'wrzątek', price: 1, active: true },
         { id: 6, name: 'chleb', price: 2, active: false },
      ],
   };
   handleChangeItemState(id) {
      const newItems = this.state.items.map((item) => {
         item.id === id ? (item.active = !item.active) : false;
         return item;
      });
      this.setState({
         items: newItems,
      });
   }

   render() {
      return (
         <main>
            <Header items={this.state.items} />
            <ListItems items={this.state.items} onClick={this.handleChangeItemState.bind(this)} />
         </main>
      );
   }
}
