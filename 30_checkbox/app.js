const AppHeader = (props) => <h1>{props.text}</h1>;

const AgeCheckbox = (props) => (
   <>
      <p>
         <input
            type="checkbox"
            name="ageValidation"
            id="ageValidation"
            checked={props.isConfirmed}
            onChange={props.click}
         />
         <label htmlFor="ageValidation">Mam co najmniej {props.age} lat!</label>
      </p>
   </>
);

const Message = (props) => <p>{props.text}</p>;

const Button = () => <button>Kup bilet</button>;

class TicketShop extends React.Component {
   state = {
      isConfirmed: false,
      isFormSubmitted: false,
   };

   handleCheckboxChange = () => {
      this.setState((prevState) => ({
         isConfirmed: !prevState.isConfirmed,
         isFormSubmitted: false,
      }));
   };

   handleFormSubmit = (e) => {
      e.preventDefault();
      if (!this.state.isFormSubmitted) {
         this.setState({
            isFormSubmitted: true,
         });
      }
   };

   messageDisplay = () => <Message text={this.state.isConfirmed ? this.props.positiveText : this.props.negativeText} />;

   render() {
      return (
         <form onSubmit={this.handleFormSubmit}>
            <AppHeader text={this.props.header} />
            <AgeCheckbox age={this.props.age} isConfirmed={this.state.isConfirmed} click={this.handleCheckboxChange} />
            <Button />
            {this.state.isFormSubmitted && this.messageDisplay()}
         </form>
      );
   }
}

class App extends React.Component {
   render() {
      return (
         <TicketShop
            header="Kup bilet na horror roku!"
            age={16}
            positiveText="Możesz obejrzeć film :)"
            negativeText="Nie możesz obejrzeć filmu :("
         />
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
