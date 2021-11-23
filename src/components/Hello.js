import './Hello.css';
import '../App.css'
import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.helloPage = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <div className="helloFrame" ref={this.helloPage}>
          <div className="helloContainer">

            <div className="helloBlock1">
              <div className="helloTextHolder">
                <div><span className="textTitle">Hi! I'm Shi-ning</span></div>
                <div><span className="textContent">A Full-Stack Developer</span></div>
                <div className="helloViews"><span className="textContent"><a className="linkOut" onClick = {() => {this.props.pageChange(2)}}>View-Skills</a></span></div>
                <div className="helloViews"><span className="textContent"><a className="linkOut" onClick = {() => {this.props.pageChange(3)}}>View-Demos</a></span></div>
              </div>
            </div>

            <div className="helloBlock2"></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Hello;
