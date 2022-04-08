const ListItems = (props) => {
   return (
      <>
         <h1>Przedmioty:</h1>
         <ul>
            {props.items.map((item) => (
               <Item key={item.id} id={item.id} name={item.name} active={item.active} onClick={props.onClick} />
            ))}
         </ul>
      </>
   );
};
<script type="text/babel" src="Item.js"></script>;
