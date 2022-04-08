const data = {
   users: [
      { name: 'Margie Colon', age: 23, sex: 'female' },
      { name: 'Jayce Poole', age: 45, sex: 'male' },
      { name: 'Rumaysa Osborn', age: 69, sex: 'female' },
      { name: 'Szymon Watson', age: 23, sex: 'male' },
   ],
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Item = ({ id, name, age, sex }) => {
   const renderSex = () => {
      if (sex === 'male')
         return (
            <p>
               Płeć: <span style={{ color: 'blue' }}>Mężczyzna</span>
            </p>
         );
      else
         return (
            <p>
               Płeć: <span style={{ color: 'red' }}>Kobieta</span>
            </p>
         );
   };
   return (
      <li>
         <h2>Użytkownik nr {id}</h2>
         <p>Nazwa: {name}</p>
         <p>Wiek: {age}</p>
         {renderSex()}
      </li>
   );
};

class ListItems extends React.Component {
   state = {
      displayedSex: 'all',
   };

   handleButtons(type) {
      if (type === 'male') {
         this.setState(() => ({
            displayedSex: 'male',
         }));
      } else if (type === 'female') {
         this.setState(() => ({
            displayedSex: 'female',
         }));
      } else {
         this.setState(() => ({
            displayedSex: 'all',
         }));
      }
   }

   render() {
      let users = this.props.data.users;
      switch (this.state.displayedSex) {
         case 'male':
            users = users.filter((user) => user.sex === 'male');
            break;
         case 'female':
            users = users.filter((user) => user.sex === 'female');
            break;
         default:
            users = data.users;
            break;
      }
      const items = users.map((user, index) => (
         <Item key={user.name} id={index + 1} name={user.name} age={user.age} sex={user.sex} />
      ));
      return (
         <>
            <Button text="Wszyscy" onClick={this.handleButtons.bind(this)} />
            <Button text="Kobiety" onClick={this.handleButtons.bind(this, 'female')} />
            <Button text="Mężczyźni" onClick={this.handleButtons.bind(this, 'male')} />
            <ul>{items}</ul>
         </>
      );
   }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));
