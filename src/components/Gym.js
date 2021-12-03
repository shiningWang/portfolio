import './Gym.css';
import '../App.css';
import gymBookingAppImg from '../img/gymBookingApp.svg';
import React from 'react';

class Gym extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="gymFrame">
                    <div className="gymContainer">

                        <div className="gymBlock1">
                            <div className="gymTextHolder">
                                <div><span className="textTitle">Gym Booking App</span></div>
                                <div className="projectIntro"><span className="textContent">This full-stack project is using React and Node.js with modern and clean design to deliver polished smooth user experience.</span></div>
                                <div className="projectExt"><span className="textContent"><a className="linkOut" href={'//gymbookingfrontend.herokuapp.com/'}>Launch-App</a></span></div>
                                <div className="projectExt"><span className="textContent"><a className="linkOut" onClick = {() => {this.props.pageChange(7)}}>View-Detail</a></span></div>
                            </div>
                        </div>

                        <div className="gymBlock2">
                            <div className="gymImgHolder">
                                <img width="100%" src={gymBookingAppImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Gym;
