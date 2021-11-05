import './App.css';
import React from 'react';

import Hello from './components/Hello';
import Stack from './components/Stack';
import Gym from './components/Gym';
import Game from './components/Game';
import Weather from './components/Weather';
import Contact from './components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: Hello,
      index: { 1: Hello, 2: Stack, 3: Gym, 4: Weather, 5: Game, 6: Contact },
    };

    this.pageChange = this.pageChange.bind(this);
    this.pageTrigger = this.pageTrigger.bind(this);

    this.pageObject = React.createRef();
    this.circleOne = React.createRef();
    this.circleTwo = React.createRef();
  }

  pageChange(index) {
    this.pageObject.current.className = "pageContainerLeaving";
    setTimeout(() => {
      this.pageObject.current.className = "pageContainer";
      this.setState({ currentPage: this.state.index[index] });
      if (index === 1) {
        this.circleOne.current.style.top = window.innerHeight - this.getCircleSize() / 2 + 'px';
        this.circleOne.current.style.left = "-" + this.getCircleSize() / 4 + 'px';
        this.circleTwo.current.style.top = "-" + this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.left = window.innerWidth - this.getCircleSize() / 2 + 'px';
      };
      if (index === 2) {
        this.circleOne.current.style.top = window.innerHeight/2 - this.getCircleSize()/2 + 'px';
        this.circleOne.current.style.left = "-" + this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.top = window.innerHeight/4 + this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.left = window.innerWidth - this.getCircleSize() / 2 + 'px';
      };
      if (index === 3) {
        this.circleOne.current.style.top = "-" + this.getCircleSize()/2 + 'px';
        this.circleOne.current.style.left = this.getCircleSize() / 3 + 'px';
        this.circleTwo.current.style.top = this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.left = window.innerWidth - this.getCircleSize() + 'px';
      };
      if (index === 4) {
        this.circleOne.current.style.top = window.innerHeight - this.getCircleSize()/3 + 'px';
        this.circleOne.current.style.left = this.getCircleSize() + 'px';
        this.circleTwo.current.style.top = "-" + this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.left = this.getCircleSize()/6 + 'px';
      };
      if (index === 5) {
        this.circleOne.current.style.top = window.innerHeight - this.getCircleSize()/3 + 'px';
        this.circleOne.current.style.left = window.innerWidth - this.getCircleSize() + 'px';
        this.circleTwo.current.style.top =  this.getCircleSize() / 6 + 'px';
        this.circleTwo.current.style.left = "-" + this.getCircleSize()/3 + 'px';
      };
      if (index === 6) {
        this.circleOne.current.style.top = "-" + this.getCircleSize() / 2 + 'px';
        this.circleOne.current.style.left = window.innerWidth - this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.top = window.innerHeight - this.getCircleSize() / 2 + 'px';
        this.circleTwo.current.style.left = "-" + this.getCircleSize() / 4 + 'px';
      };
    }, 500);

  }

  pageTrigger() {
    return (
      <React.Fragment>
        <div className="buttonsHolder">
          {this.state.currentPage === Hello && <div className="pageActive"><span className="textContent">Who</span></div>}{this.state.currentPage !== Hello && <div className="page" onClick={() => { this.pageChange(1) }}><span className="textContent">1</span></div>}
          {this.state.currentPage === Stack && <div className="pageActive"><span className="textContent">Skills</span></div>}{this.state.currentPage !== Stack && <div className="page" onClick={() => { this.pageChange(2) }}><span className="textContent">2</span></div>}
          {this.state.currentPage === Gym && <div className="pageActive"><span className="textContent">WebApp</span></div>}{this.state.currentPage !== Gym && <div className="page" onClick={() => { this.pageChange(3) }}><span className="textContent">3</span></div>}
          {this.state.currentPage === Weather && <div className="pageActive"><span className="textContent">Apis</span></div>}{this.state.currentPage !== Weather && <div className="page" onClick={() => { this.pageChange(4) }}><span className="textContent">4</span></div>}
          {this.state.currentPage === Game && <div className="pageActive"><span className="textContent">Game</span></div>}{this.state.currentPage !== Game && <div className="page" onClick={() => { this.pageChange(5) }}><span className="textContent">5</span></div>}
          {this.state.currentPage === Contact && <div className="pageActive"><span className="textContent">Contact</span></div>}{this.state.currentPage !== Contact && <div className="page" onClick={() => { this.pageChange(6) }}><span className="textContent">6</span></div>}
        </div>
      </React.Fragment>
    )
  }

  getCircleSize() {
    let viewWidth = window.innerWidth;
    let viewHeight = window.innerHeight;
    let circleWidth = (viewWidth + viewHeight) / 4;
    return (circleWidth)
  }

  componentDidMount() {
    this.circleOne.current.style.top = window.innerHeight - this.getCircleSize() / 2 + 'px';
    this.circleOne.current.style.left = "-" + this.getCircleSize() / 4 + 'px';
    this.circleTwo.current.style.top = "-" + this.getCircleSize() / 2 + 'px';
    this.circleTwo.current.style.left = window.innerWidth - this.getCircleSize() / 2 + 'px';
  }

  render() {
    return (
      <React.Fragment>
        <div className="pageContainer" ref={this.pageObject}>
          <this.state.currentPage />
        </div>

        <this.pageTrigger />

        <div className="backgroundContainer">
          <div className="circle1" style={{ "width": this.getCircleSize() + "px", "height": this.getCircleSize() + "px" }} ref={this.circleOne}></div>
          <div className="circle2" style={{ "width": this.getCircleSize() + "px", "height": this.getCircleSize() + "px" }} ref={this.circleTwo}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
