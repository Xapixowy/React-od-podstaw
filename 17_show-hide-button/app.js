class Message extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messageIsActive: false,
      };
      this.handleButtonClick = this.handleButtonClick.bind(this);
   }

   handleButtonClick(e) {
      this.state.messageIsActive ? (e.target.textContent = 'Ukryj') : (e.target.textContent = 'Pokaż');
      this.setState((prevState) => ({
         messageIsActive: !prevState.messageIsActive,
      }));
   }

   render() {
      console.log(this.state.messageIsActive);
      const text =
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates nisi vero! Consectetur, dolorem. Voluptatum optio quia, itaque voluptatibus commodi nostrum! Quia explicabo nostrum, numquam ex asperiores optio nulla qui.';

      return (
         <>
            <button onClick={this.handleButtonClick}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
            {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
            {this.state.messageIsActive && <p>{text}</p>}
         </>
      );
   }
}

ReactDOM.render(<Message />, document.getElementById('root'));
