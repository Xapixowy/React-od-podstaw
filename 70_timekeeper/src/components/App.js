import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

class App extends Component {
   state = {
      time: {
         hours: 0,
         minutes: 0,
         seconds: 0,
         miliseconds: 0,
      },
      active: false,
   };

   timer;

   addZero = (value, quantity = 2) => {
      let zeros = {
         value: '',
         length: 0,
      };
      if (value >= 0 && value < 10) zeros.length = quantity - 1;
      else if (value >= 10 && value < 100) zeros.length = quantity - 2;
      else if (value >= 100 && value < 1000) zeros.length = quantity - 3;
      for (let i = 0; i < zeros.length; i++) zeros.value += '0';
      const result = `${zeros.value}${value}`;
      return result;
   };

   timerCount = () => {
      const time = this.state.time;
      time.miliseconds += 10;
      if (time.miliseconds === 1000) {
         time.miliseconds = 0;
         time.seconds++;
      }
      if (time.seconds === 60) {
         time.seconds = 0;
         time.minutes++;
      }
      if (time.minutes === 60) {
         time.minutes = 0;
         time.hours++;
      }
      this.setState({ time });
   };

   handleTimerStartStop = () => {
      this.state.active ? clearInterval(this.timer) : (this.timer = setInterval(this.timerCount, 10));
      this.setState((prevState) => ({ active: !prevState.active }));
   };

   handleTimerReset = () => {
      clearInterval(this.timer);
      this.setState({
         time: {
            hours: 0,
            minutes: 0,
            seconds: 0,
            miliseconds: 0,
         },
         active: false,
      });
   };

   render() {
      return (
         <div className="timekeeper">
            <h1>Timekeeper</h1>
            <Display addZero={this.addZero} time={this.state.time} active={this.state.active} />
            <span className="buttons">
               <Button onClick={this.handleTimerStartStop} text={this.state.active ? 'STOP' : 'START'} />
               <Button onClick={this.handleTimerReset} text="RESET" />
            </span>
         </div>
      );
   }
}

export default App;
