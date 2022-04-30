import React, { Component } from 'react';
import './App.css';

class App extends Component {
   state = {
      form: {
         username: '',
         email: '',
         password: '',
         accept: false,
         message: '',
      },
      errors: {
         username: false,
         email: false,
         password: false,
         accept: false,
      },
   };

   messages = {
      username_incorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji!',
      email_incorrect: 'Brak @ w email!',
      password_incorrect: 'Hasło musi mieć 8 znaków',
      accept_incorrect: 'Regulamin niezaakceptowany!',
   };

   handleInputChange = (e) => {
      const name = e.target.name;
      const type = e.target.type;
      const value = e.target.value;
      const checked = e.target.checked;
      const form = this.state.form;

      if (type === 'checkbox') {
         form[name] = checked;
      } else if (type === 'text' || type === 'email' || type === 'password') {
         form[name] = value;
      }
      this.setState({ form });
   };

   formValidation = () => {
      const username = this.state.form.username;
      const email = this.state.form.email;
      const password = this.state.form.password;
      const accept = this.state.form.accept;

      let isUsernameOk = false;
      let isEmailOk = false;
      let isPasswordOk = false;
      let isAcceptOk = false;
      let isFormOk = false;

      if (username.length > 10 && username.indexOf(' ') === -1) isUsernameOk = true;
      if (email.indexOf('@') !== -1) isEmailOk = true;
      if (password.length === 8) isPasswordOk = true;
      if (accept) isAcceptOk = true;

      if (isUsernameOk && isEmailOk && isPasswordOk && isAcceptOk) isFormOk = true;

      return { isFormOk, isUsernameOk, isEmailOk, isPasswordOk, isAcceptOk };
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const validation = this.formValidation();

      if (validation.isFormOk) {
         this.setState({
            form: {
               username: '',
               email: '',
               password: '',
               accept: false,
               message: 'Formularz został wysłany!',
            },
            errors: {
               username: false,
               email: false,
               password: false,
               accept: false,
            },
         });
      } else {
         const errors = this.state.errors;
         validation.isUsernameOk ? (errors.username = false) : (errors.username = true);
         validation.isEmailOk ? (errors.email = false) : (errors.email = true);
         validation.isPasswordOk ? (errors.password = false) : (errors.password = true);
         validation.isAcceptOk ? (errors.accept = false) : (errors.accept = true);
         this.setState({ errors });
      }
   };

   componentDidUpdate() {
      if (this.state.form.message !== '') {
         const messageField = document.querySelector('span.message');
         messageField.style.animationPlayState = 'running';
         const form = this.state.form;
         form.message = '';
         setTimeout(() => {
            this.setState({ form });
         }, 3000);
      }
   }

   render() {
      return (
         <div className="App">
            <h1>Formularz</h1>
            <form>
               <label htmlFor="username">
                  Twoję imię:
                  <input
                     type="text"
                     id="username"
                     name="username"
                     value={this.state.form.username}
                     onChange={this.handleInputChange}
                  />
                  <span className="error">{this.state.errors.username && this.messages.username_incorrect}</span>
               </label>
               <label htmlFor="email">
                  Twój email:
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={this.state.form.email}
                     onChange={this.handleInputChange}
                  />
                  <span className="error">{this.state.errors.email && this.messages.email_incorrect}</span>
               </label>
               <label htmlFor="password">
                  Twoje hasło:
                  <input
                     type="password"
                     id="password"
                     name="password"
                     value={this.state.form.password}
                     onChange={this.handleInputChange}
                  />
                  <span className="error">{this.state.errors.password && this.messages.password_incorrect}</span>
               </label>
               <label htmlFor="accept">
                  <input
                     type="checkbox"
                     id="accept"
                     name="accept"
                     checked={this.state.form.accept}
                     onChange={this.handleInputChange}
                  />
                  Akceptuj regulamin
                  <span className="error">{this.state.errors.accept && this.messages.accept_incorrect}</span>
               </label>
               <button onClick={this.handleSubmit}>Zarejestruj się</button>
               {this.state.form.message && <span className="message">{this.state.form.message}</span>}
            </form>
         </div>
      );
   }
}

export default App;
