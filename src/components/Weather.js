import './Weather.css';
import '../App.css';
import weatherImg from '../img/weather.svg';
import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="weatherFrame">
                    <div className="weatherContainer">

                        <div className="weatherBlock1">
                            <div className="weatherTextHolder">
                                <div><span className="textTitle">Weather Forecast</span></div>
                                <div><span className="textContent">This fully responsive weather forecast app is using HTML, CSS, and React to deliver quality, visual pleasing web service based on Third Party APIs</span></div>
                                <div className="projectExt"><span className="textContent"><a className="linkOut" href={'//shiningwang.github.io/weather/'}>Live Demo</a></span></div>
                            </div>
                        </div>

                        <div className="weatherBlock2">
                            <div className="weatherImgHolder">
                                <img width="45%" className="weatherImg" src={weatherImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Weather;
