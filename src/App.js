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

class App extends React.Component {
  state = {
    fired: false
  };

  playSound = e => {
    const { fired } = this.state;

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add('playing');
    key.classList.add('active');
    if (!fired) {
      this.setState(
        {
          fired: true
        },
        () => {
          audio.play();
        }
      );
    }
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

        key.classList.remove('active');
        key.classList.remove('playing');
      }
    );
  };

  render() {
    window.addEventListener('keydown', this.playSound);
    window.addEventListener('keyup', this.removeTransition);

    return (
      <div className="App">
        <div className="SkrrtAnimation">
          <Skrrrt />
        </div>
        <div className="Esizer">
          <img src={esizer} alt="" />
        </div>
        <div className="keys">
          <div className="piano">
            <ul className="set">
              <li className="white f key" data-key="65">
                <audio data-key="65" id="F" src={F} />
              </li>
              <li className="black fs key" data-key="87">
                <audio id="Fsharp" src={Fsharp} data-key="87" />
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
