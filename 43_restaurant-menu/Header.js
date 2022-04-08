const Header = (props) => {
   const itemsActive = props.items.filter((item) => item.active);
   let itemsPrice = 0;
   itemsActive.forEach((item) => (itemsPrice += item.price));
   return (
      <header>
         <h1>Podsumowanie zamówienia:</h1>
         <h2>
            Liczba zamówionych przedmiotów: <span>{itemsActive.length}</span>
         </h2>
         <h2>
            Kwota zamówienia: <span>{itemsPrice}zł</span>
         </h2>
      </header>
   );
};
