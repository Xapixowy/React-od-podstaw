const Item = (props) => (
   <li className={props.active ? 'active' : null} onClick={() => props.onClick(props.id)}>
      {props.name}
   </li>
);
