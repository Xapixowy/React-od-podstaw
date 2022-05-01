import './Task.css';

function Task(props) {
   const { id, text, date, priority, active, finishDate } = props.task;
   return (
      <li>
         <p style={active && priority ? { color: 'red' } : null}>
            {text} <span className="date">do {date}</span>
            {active ? <button onClick={() => props.doneHandler(id)}>Zrobione!</button> : null}
            <button onClick={() => props.deleteHandler(id)}>X</button>
         </p>
         {!active ? (
            <p>
               Wykonano: <span className="date">{finishDate}</span>
            </p>
         ) : null}
      </li>
   );
}

export default Task;
