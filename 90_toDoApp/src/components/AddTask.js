import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
   today = new Date().toISOString().slice(0, 10);

   state = {
      text: '',
      date: this.today,
      priority: false,
   };

   inputHandler = (e) => {
      const type = e.target.type;
      const name = e.target.name;
      const value = e.target.value;
      if (type === 'checkbox') this.setState({ [name]: e.target.checked });
      else if (type === 'text' || type === 'date') this.setState({ [name]: value });
   };

   formHandler = (e) => {
      e.preventDefault();
      let isFormOk = true;
      if (this.state.text === '') {
         isFormOk = false;
         alert(`Nie wpisano zadania! Uzupełnij pole!`);
      } else if (this.state.date === '') {
         isFormOk = false;
         alert(`Nie wybrano terminu! Uzupełnij pole!`);
      }
      if (isFormOk) {
         this.props.onClick(this.state);
         this.setState({
            text: '',
            date: this.today,
            priority: false,
         });
         alert('Dodano zadanie!');
      }
   };

   render() {
      return (
         <form id="addTask">
            <label htmlFor="task">
               Zadanie:
               <input type="text" name="text" id="text" value={this.state.text} onChange={this.inputHandler} />
            </label>
            <label htmlFor="date">
               Termin:
               <input
                  type="date"
                  name="date"
                  id="date"
                  min={this.today}
                  value={this.state.date}
                  onChange={this.inputHandler}
               />
            </label>
            <label htmlFor="priority">
               <input
                  type="checkbox"
                  name="priority"
                  id="priority"
                  value={this.state.priority}
                  onChange={this.inputHandler}
               />
               Priorytet
            </label>
            <button onClick={this.formHandler}>Dodaj</button>
         </form>
      );
   }
}

export default AddTask;
