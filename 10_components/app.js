const Header = () => {
   return (
      <div>
         <h1>Witaj na stronie!</h1>
      </div>
   );
};

class Articles extends React.Component {
   state = {
      number: 1,
   };
   render() {
      return (
         <section>
            <h2>Artykuł {this.state.number}</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias facilis quidem, veritatis
               consectetur quasi, sapiente esse doloribus iusto architecto optio vero delectus corrupti error. Quod
               dolorum delectus amet corporis!
            </p>
         </section>
      );
   }
}

const App = () => {
   return (
      <>
         <Header />
         <Articles />
      </>
   );
};

ReactDOM.render(<App />, document.getElementById('root'));
