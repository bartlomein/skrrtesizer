import React from 'react';
import './App.css';
import F from './sounds/skrrt_F.mp3';
import Fsharp from './sounds/skrrt_Fsharp.mp3';
import G from './sounds/skrrt_G.mp3';
import Gsharp from './sounds/skrrt_Gsharp.mp3';
import A from './sounds/skrrt_A.mp3';
import Asharp from './sounds/skrrt_Asharp.mp3';
import B from './sounds/skrrt_B.mp3';
import C from './sounds/skrrt_C.mp3';
import Csharp from './sounds/skrrt_Csharp.mp3';
import D from './sounds/skrrt_D.mp3';
import Dsharp from './sounds/skrrt_Dsharp.mp3';
import E from './sounds/skrrt_E.mp3';
import Skrrrt from './Skrrrt';
import esizer from './img/1x/esizer.png';

import Player from './components/Player';
import Reverb from './components/Reverb';
import PingPongDelay from './components/PingPongDelay';

class App extends React.Component {
  state = {
    fired: false,
    sound: null,
    reverb: null,
    delay: null
  };

  getReverb = obj => {
    this.setState({
      reverb: obj
    });
  };

  getDelay = obj => {
    this.setState({
      delay: obj
    });
    console.log(this.state.delay);
  };

  playSound = sound => {
    this.setState(
      {
        sound
      },
      () => {
        this.setState({
          sound: null
        });
      }
    );
  };
  removeTransition = e => {
    const { fired } = this.state;
    if (!fired) {
      return;
    }
    this.setState(
      {
        fired: false
      },
      () => {
        const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
        const skrrt = document.querySelector('.SkrrtAnimation');
        key.classList.remove('active');
        key.classList.remove('playing');
        skrrt.classList.remove('popUp');
      }
    );
  };

  render() {
    const { sound, reverb, delay } = this.state;

    return (
      <div className="App">
        <div className="SkrrtAnimation">
          <Skrrrt />
          <PingPongDelay getDelay={this.getDelay} />
          <Reverb getReverb={this.getReverb} />
        </div>
        <div className="Esizer">
          <img src={esizer} alt="" />
        </div>
        <div className="keys">
          <div className="piano">
            <ul className="set">
              <li
                className="white f key"
                data-key="65"
                onClick={() => this.playSound(F)}
              >
                {/* <audio data-key="65" id="F" src={F} /> */}
                {sound === F ? (
                  <Player sound={F} reverb={reverb} delay={delay} />
                ) : null}
              </li>
              <li
                className="black fs key"
                data-key="87"
                onClick={() => this.playSound(Fsharp)}
              >
                {sound === Fsharp ? (
                  <Player sound={Fsharp} reverb={reverb} delay={delay} />
                ) : null}
                {/* <audio id="Fsharp" src={Fsharp} data-key="87" /> */}
              </li>
              <li className="white g key" data-key="83">
                <audio id="G" src={G} data-key="83" />
              </li>
              <li className="black gs key" data-key="69">
                <audio data-key="69" id="Gsharp" src={Gsharp} />
              </li>
              <li className="white a key" data-key="68">
                <audio data-key="68" id="A" src={A} />
              </li>
              <li className="black as key" data-key="82">
                <audio id="Asharp" src={Asharp} data-key="82" />
              </li>
              <li className="white b key f" data-key="70">
                <audio data-key="70" id="B" src={B} />
              </li>
              <li className="white e key" data-key="71">
                <audio id="C" src={C} data-key="71" />
              </li>
              <li className="black ds key" data-key="89">
                <audio id="Csharp" src={Csharp} data-key="89" />
              </li>
              <li className="white d key" data-key="72">
                <audio id="D" src={D} data-key="72" />
              </li>
              <li className="black cs key" data-key="85">
                <audio id="Dsharp" src={Dsharp} data-key="85" />
              </li>
              <li className="white c key" data-key="74">
                <audio id="E" src={E} data-key="74" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
