import './Stack.css';
import '../App.css'
import React from 'react';

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: this.props.pageNumber,
      stackClassName: "stackFrame",
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.stackClassName}>
          <div className="stackContainer">

            <div className="stackBlock1">
              <div className="stackBlock1Holder1">
                <span className="textContent">I'm keen on accomplishing challenging development goals under stict deadline.</span>
              </div>
            </div>

            <div className="stackBlock2">

              <div className="stackBlock2Holder1">
                <div className="stackFrontend">
                  <div><span className="textContent">Front-End Stack</span></div>
                  <div><span className="textContent">HTML5 - CSS3 - JS</span></div>
                  <div><span className="textContent">React.js / Vue.js</span></div>
                </div>
              </div>

              <div className="stackBlock2Holder2">
                <div className="stackBackend">
                  <div><span className="textContent">Back-End Stack</span></div>
                  <div><span className="textContent">Node.js | Python</span></div>
                  <div><span className="textContent">MongoDB</span></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Stack;
