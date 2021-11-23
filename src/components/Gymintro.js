import './Gymintro.css';
import '../App.css';
import reactImg from '../img/react.svg';
import jwtImg from '../img/jwt.svg';
import nodejsImg from '../img/nodejs.svg';
import gymBookingHomeImg from '../img/gymBookingHome.png';
import gymBookingMenuImg from '../img/gymBookingMenu.png';
import gymBookingCategoriesImg from '../img/gymBookingCategories.png';
import gymBookingYogaSessionsImg from '../img/gymBookingYogaSessions.png';
import gymBookingErrorPreventionImg from '../img/gymBookingErrorPrevention.png';
import gymBookingMySchedualeImg from '../img/gymBookingMyScheduale.png';
import backImg from '../img/back.svg';

import React from 'react';

class Gymintro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <React.Fragment>
                <div className="gymIntroFrame">
                    <div className="gymIntroContainer" ref={this.showPage}>

                        <div className="gymIntroEntry">

                            <div className="entryBlock1">
                                <div className="entryBlock1Content">
                                    <div className="entryTitle"><span className="textTitle">Gym Booking App</span></div>
                                    <div className="entryContent"><span className="textContent">UX | Full-Stack | SPA</span></div>
                                    <div className="gymStackImgHolder">
                                        <img height="80%" src={reactImg} />
                                        <img height="80%" src={jwtImg} />
                                        <img height="65%" src={nodejsImg} />
                                    </div>
                                    <div className="projectExt"><span className="textContent"><a className="linkOut" href={'//github.com/shiningWang?tab=repositories'}>View-Repository</a></span></div>
                                    <div className="projectExt" onClick={() => { this.props.pageChange(3) }}><a className="linkOut"><span className="textContent">Back</span></a></div>
                                </div>
                            </div>

                            <div className="entryBlock2">
                                <div className="entryImg">
                                    <img height="80%" src={gymBookingHomeImg} />
                                </div>
                            </div>

                        </div>

                        <div className="gymBrief">

                            <div className="briefContent">
                                <div className="briefContentBlock">
                                    <span className="textContent">
                                        This Gym Booking Single Page Application provides comprehensive booking solution with
                                        modern and appealing UI/UX design. The Gym can create and management available sessions
                                        and the customers can check and book sessions on their mobile or desktop devices.
                                    </span>
                                </div>
                            </div>

                            <div className="briefStack">
                                <div className="gymFrontend">
                                    <div className="gymFrontendBlock1">
                                        <img width="80%" src={reactImg} />
                                    </div>
                                    <div className="gymFrontendBlock2">
                                        <span className="textContent">
                                            The front-end of this Single Page Application is powered by ReactJs. VDOM helps the App
                                            maintain high efficiency, and the component design improves accessibility and reusability which can benefit
                                            both development and upgrade.
                                        </span>
                                    </div>
                                </div>
                                <div className="gymBackend">
                                    <div className="gymBackendBlock1">
                                        <img width="80%" src={nodejsImg} />
                                    </div>
                                    <div className="gymBackendBlock2">
                                        <span className="textContent">
                                            The back-end is powered by NodeJs. Thanks to the flexibility and reputable IO capability,
                                            the server can be scaled cost-effectively to suit the changing needs and keep great performance.
                                            Database in this case is MongoDB Atlas. This noSQL is resizable, which is perfect for growing business.
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="gymAppCol">
                            <div className="gymAppColBlock1">
                                <div className="gymAppColBlock1Container">
                                    <div className="gymIntroText"><span className="textTitle">App Menu</span></div>
                                    <div className="gymIntroText"><span className="textContent">
                                        The client side app has 4 main pages: Home, Make Booking, My Sessions, and About page.
                                        Once the user clicks the Menu button on the top right, this menu page appears on top of the
                                        current page. The menu button can be accessed across the whole app.
                                    </span></div>
                                </div>
                            </div>
                            <div className="gymAppColBlock2">
                                <div className="gymAppColBlock2Container">
                                    <img height="80%" src={gymBookingMenuImg} />
                                </div>
                            </div>
                        </div>

                        <div className="gymAppCol">
                            <div className="gymAppColBlock2">
                                <div className="gymAppColBlock2Container">
                                    <img height="80%" src={gymBookingCategoriesImg} />
                                </div>
                            </div>
                            <div className="gymAppColBlock1">
                                <div className="gymAppColBlock1Container">
                                    <div className="gymIntroText"><span className="textTitle">Variety of Sessions</span></div>
                                    <div className="gymIntroText"><span className="textContent">
                                        The new booking page shows all types of sessions. Each of the block has a symbolic image
                                        on the side. It also tells the customers how many available sessions left this week. Customer 
                                        clicking on the View Times button, it will jump to that specific type of session page, and customer 
                                        can view, book or withdraw from there.
                                    </span></div>
                                </div>
                            </div>
                        </div>

                        <div className="gymAppCol">
                            <div className="gymAppColBlock1">
                                <div className="gymAppColBlock1Container">
                                    <div className="gymIntroText"><span className="textTitle">Make Booking</span></div>
                                    <div className="gymIntroText"><span className="textContent">
                                        The booking page will send request to backend server everytime customer views it, 
                                        in order to always show the latest sessions. Each block shows the most important 
                                        detail of the session. The customer can click on the "..." more button on the top 
                                        right to make booking and to see more detail such as the classroom number etc.
                                    </span></div>
                                </div>
                            </div>
                            <div className="gymAppColBlock2">
                                <div className="gymAppColBlock2Container">
                                    <img height="80%" src={gymBookingYogaSessionsImg} />
                                </div>
                            </div>
                        </div>

                        <div className="gymAppCol">
                            <div className="gymAppColBlock2">
                                <div className="gymAppColBlock2Container">
                                    <img height="80%" src={gymBookingErrorPreventionImg} />
                                </div>
                            </div>
                            <div className="gymAppColBlock1">
                                <div className="gymAppColBlock1Container">
                                    <div className="gymIntroText"><span className="textTitle">Error Prevention</span></div>
                                    <div className="gymIntroText"><span className="textContent">
                                        Across this App, all actions such as make new booking, withdraw a booking, or logout, it asks for 
                                        comfirmation before execution. This is to reduce error and improve usability. Once customer confirm 
                                        their make booking command, the App will check with server that the particular session is still 
                                        available at that time.
                                    </span></div>
                                </div>
                            </div>
                        </div>

                        <div className="gymAppCol">
                            <div className="gymAppColBlock1">
                                <div className="gymAppColBlock1Container">
                                    <div className="gymIntroText"><span className="textTitle">Manage Sessions</span></div>
                                    <div className="gymIntroText"><span className="textContent">
                                        On My Schedule page, customer can view or edit each specific booking. The results on this page 
                                        are sorted by time, from the latest ones to the future ones.
                                    </span></div>
                                </div>
                            </div>
                            <div className="gymAppColBlock2">
                                <div className="gymAppColBlock2Container">
                                    <img height="80%" src={gymBookingMySchedualeImg} />
                                </div>
                            </div>
                        </div>

                        <div className="gymInfoExit">
                            <div className="gymInfoExitHolder" onClick={() => { this.props.pageChange(3) }}>
                                <div className="gymExitIcon"><img height="100%" src={backImg} /></div>
                                <div className="gymExitText"><span className="textContent">Back</span></div>
                            </div>
                        </div>

                    </div>



                </div>
            </React.Fragment>
        )
    }
}

export default Gymintro;