import './TaskList.css';
import Task from './Task';

function TaskList(props) {
   const activeTasks = props.tasks.filter((task) => task.active);
   const doneTasks = props.tasks.filter((task) => !task.active);
   activeTasks.sort((a, b) => {
      return a.text.localeCompare(b.text);
   });
   doneTasks.sort((a, b) => new Date(b.finishDate).getTime() - new Date(a.finishDate).getTime());
   return (
      <div id="taskList">
         <div className="activeTasks">
            <h2>Aktywne zadania ({activeTasks.length})</h2>
            <ul>
               {activeTasks.map((task) => (
                  <Task key={task.id} task={task} doneHandler={props.doneHandler} deleteHandler={props.deleteHandler} />
               ))}
            </ul>
         </div>
         <div className="doneTasks">
            <h2>Zakończone zadania ({doneTasks.length})</h2>
            {doneTasks.length >= 5 && <p className="lastFive">Wyświetlono 5 ostatnich zadań</p>}
            <ul>
               {doneTasks.splice(0, 5).map((task) => (
                  <Task key={task.id} task={task} doneHandler={props.doneHandler} deleteHandler={props.deleteHandler} />
               ))}
            </ul>
         </div>
      </div>
   );
}

export default TaskList;
