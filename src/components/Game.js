import './Game.css';
import '../App.css';
import gameImg from '../img/game.svg';
import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="gameFrame">
                    <div className="gameContainer">

                        <div className="gameBlock1">
                            <div className="gameTextHolder">
                                <div><span className="textTitle">Flappy Bird</span></div>
                                <div><span className="textContent">This game is using HTML, CSS, and React to demostrate the capability of realtime interactivity in the web-base environment.</span></div>
                                <div className="projectExt"><span className="textContent"><a className="linkOut" href={'//shiningwang.github.io/game/'}>Launch-App</a></span></div>
                                <div className="projectExt"><span className="textContent"><a className="linkOut" href={'//github.com/shiningWang?tab=repositories'}>View-Repository</a></span></div>
                            </div>
                        </div>

                        <div className="gameBlock2">
                            <div className="gameImgHolder">
                                <img width="35%" className="gameImg" src={gameImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Game;
