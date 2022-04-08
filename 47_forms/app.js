class Form extends React.Component {
   state = {
      city: 'Londyn',
      text: '',
      isLiked: true,
      visitsCount: 1,
   };

   handleFormChange = (e) => {
      console.log(e.target.name);
      if (e.target.type === 'checkbox') this.setState({ [e.target.name]: e.target.checked });
      else this.setState({ [e.target.name]: e.target.value });
   };
   /*
   handleCityChange = (e) => {
      this.setState((prevState) => ({
         city: e.target.value,
      }));
   };

   handleTextChange = (e) => {
      this.setState((prevState) => ({
         text: e.target.value,
      }));
   };

   handleLikeChange = (e) => {
      this.setState((prevState) => ({
         isLiked: e.target.checked,
      }));
   };

   handleVisitsCountChange = (e) => {
      this.setState((prevState) => ({
         visitsCount: e.target.value,
      }));
   };
   */

   render() {
      return (
         <div>
            <label>
               Podaj miasto: <input type="text" name="city" onChange={this.handleFormChange} value={this.state.city} />
            </label>
            <br />
            <label>
               Napisz coś o tym mieście <br />
               <textarea value={this.state.text} name="text" onChange={this.handleFormChange}></textarea>
            </label>
            <br />
            <label>
               Czy lubisz to miasto?
               <input type="checkbox" checked={this.state.isLiked} name="isLiked" onChange={this.handleFormChange} />
            </label>
            <br />
            <label>
               Ile razy byłeś?
               <select value={this.state.visitsCount} name="visitsCount" onChange={this.handleFormChange}>
                  <option value="nigdy">nigdy</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="more">więcej</option>
               </select>
            </label>
         </div>
      );
   }
}

ReactDOM.render(<Form />, document.getElementById('root'));
