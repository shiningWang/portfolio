import './Contact.css';
import '../App.css';
import mobileImg from '../img/mobile.svg';
import emailImg from '../img/email.svg';
import githubImg from '../img/github.svg';
import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: this.props.viewPositionY,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="contactFrame">
                    <div className="contactContainer">

                        <div className="contactBlock1">
                            <div className="contactTextHolder">
                                <div><span className="textTitle">Let's Chat!</span></div>
                                <div><span className="textContent">Love to take any exciting opportunities.</span></div>
                            </div>
                        </div>

                        <div className="contactBlock2">
                            <div className="contactDetailHolder">

                                <div className="contactBox">
                                    <div className="contactIconHolder"><img className="mobileImg" src={mobileImg} /></div>
                                    <span className="textContent">0435 787 649</span>
                                </div>

                                <div className="contactBox">
                                    <div className="contactIconHolder"><img className="emailImg" src={emailImg} /></div>
                                    <span className="textContent">weiyuwuchang@gmail.com</span>
                                </div>

                                <div className="contactBox">
                                    <div className="contactIconHolder"><img className="githubImg" src={githubImg} /></div>
                                    <span className="textContent">shiningWang</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;
