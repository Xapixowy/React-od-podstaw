import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

const dateToString = (date) => {
   const addZero = (value) => (value < 10 ? `0${value}` : value);
   const year = date.getFullYear();
   const month = addZero(date.getMonth() + 1);
   const day = addZero(date.getDate());
   const hours = addZero(date.getHours());
   const minutes = addZero(date.getMinutes());
   const seconds = addZero(date.getSeconds());
   let dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
   return dateString;
};

class App extends Component {
   state = {
      tasks: [
         {
            id: 0,
            text: 'Zagrać w Cyberpunka 2077!',
            date: '2022-05-01',
            priority: false,
            active: true,
            finishDate: null,
         },
         {
            id: 1,
            text: 'Zacząć kurs React!',
            date: '2022-06-12',
            priority: true,
            active: true,
            finishDate: null,
         },
         {
            id: 2,
            text: 'Zacząć ćwiczyć!',
            date: '2077-02-01',
            priority: false,
            active: true,
            finishDate: null,
         },
         {
            id: 3,
            text: 'Zagrać w Cyberpunka 2077!',
            date: '2022-05-01',
            priority: false,
            active: true,
            finishDate: null,
         },
         {
            id: 4,
            text: 'Zacząć kurs React!',
            date: '2022-06-12',
            priority: true,
            active: true,
            finishDate: null,
         },
         {
            id: 5,
            text: 'Zacząć ćwiczyć!',
            date: '2077-02-01',
            priority: false,
            active: true,
            finishDate: null,
         },
      ],
   };

   addTaskHandler = (newTask) => {
      const tasks = [...this.state.tasks];
      tasks.push({
         id: tasks.length,
         text: newTask.text,
         date: newTask.date,
         priority: newTask.priority,
         active: true,
         finishDate: null,
      });
      this.setState({ tasks });
      return true;
   };

   doneTaskHandler = (id) => {
      const tasks = [...this.state.tasks];
      tasks.forEach((task) => {
         if (task.id === id) {
            task.active = false;
            task.finishDate = dateToString(new Date());
         }
      });
      this.setState({ tasks });
   };

   deleteTaskHandler = (id) => {
      let tasks = [...this.state.tasks];
      tasks = tasks.filter((task) => task.id !== id);
      this.setState({ tasks });
   };

   render() {
      return (
         <>
            <h1>ToDo App</h1>
            <hr />
            <AddTask onClick={this.addTaskHandler} />
            <hr />
            <TaskList
               tasks={this.state.tasks}
               doneHandler={this.doneTaskHandler}
               deleteHandler={this.deleteTaskHandler}
            />
         </>
      );
   }
}

export default App;
