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
import BitCrusher from './components/BitCrusher';
import Phaser from './components/Phaser';

class App extends React.Component {
  state = {
    fired: false,
    sound: null,
    reverb: null,
    delay: null,
    crusher: null,
    phaser: null
  };

  componentWillMount() {
    window.addEventListener('keydown', this.playSoundOnKeyboard);
    window.addEventListener('keyup', this.removeTransition);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  playSoundOnKeyboard = e => {
    const { sound, reverb, delay, crusher, phaser } = this.state;
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    const skrrt = document.querySelector('.SkrrtAnimation');

    const { fired } = this.state;

    // const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    // const skrrt = document.querySelector('.SkrrtAnimation');

    if (!fired) {
      this.setState({
        fired: true
      });
    }

    let keySound;
    switch (e.key.toLowerCase()) {
      case 'a':
        keySound = F;
        break;
      case 'w':
        keySound = Fsharp;
        break;
      case 's':
        keySound = G;
        break;
      case 'e':
        keySound = Gsharp;
        break;
      case 'd':
        keySound = A;
        break;
      case 'r':
        keySound = Asharp;
        break;
      case 'f':
        keySound = B;
        break;
      case 'g':
        keySound = C;
        break;
      case 'y':
        keySound = Csharp;
        break;
      case 'h':
        keySound = D;
        break;
      case 'u':
        keySound = Dsharp;
        break;
      case 'j':
        keySound = E;
        break;

      default:
        return;
      // code block
    }
    key.classList.add('playing');
    key.classList.add('active');
    skrrt.classList.add('popUp');

    this.setState(
      {
        sound: keySound
      },
      () => {
        console.log(sound);
        this.setState({
          sound: null
        });
      }
    );
  };

  getPhaser = obj => {
    this.setState({
      phaser: obj
    });
  };

  getReverb = obj => {
    this.setState({
      reverb: obj
    });
  };

  getBitCrusher = obj => {
    this.setState({
      crusher: obj
    });
  };

  getDelay = obj => {
    this.setState({
      delay: obj
    });
  };

  playSound = sound => {
    this.setState(
      {
        sound
      },
      () => {
        this.setState({
          sound: null,
          fired: false
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
        console.log(key);
        if (key && key.classList.contains('active')) {
          key.classList.remove('active');
        }
        if (key && key.classList.contains('playing')) {
          key.classList.remove('playing');
        }
        if (key && skrrt.classList.contains('popUp')) {
          skrrt.classList.remove('popUp');
        }
      }
    );
  };

  render() {
    const { sound, reverb, delay, crusher, phaser } = this.state;

    return (
      <div className="App">
        {sound !== null ? (
          <Player
            sound={sound}
            reverb={reverb}
            delay={delay}
            crusher={crusher}
            phaser={phaser}
          />
        ) : null}
        <div className="SkrrtAnimation">
          <Skrrrt />
        </div>
        <PingPongDelay getDelay={this.getDelay} time="8n" wet={0.5} />
        <Reverb getReverb={this.getReverb} />
        <BitCrusher getBitCrusher={this.getBitCrusher} crushNumber={8} />
        <Phaser getPhaser={this.getPhaser} />
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
              />
              <li
                className="black fs key"
                data-key="87"
                onClick={() => this.playSound(Fsharp)}
              />
              <li
                className="white g key"
                data-key="83"
                onClick={() => this.playSound(G)}
              />
              <li
                className="black gs key"
                data-key="69"
                onClick={() => this.playSound(Gsharp)}
              />
              <li
                className="white a key"
                data-key="68"
                onClick={() => this.playSound(A)}
              />
              <li
                className="black as key"
                data-key="82"
                onClick={() => this.playSound(Asharp)}
              />
              <li
                className="white b key f"
                data-key="70"
                onClick={() => this.playSound(B)}
              />
              <li
                className="white e key"
                data-key="71"
                onClick={() => this.playSound(C)}
              />
              <li
                className="black ds key"
                data-key="89"
                onClick={() => this.playSound(Csharp)}
              />
              <li
                className="white d key"
                data-key="72"
                onClick={() => this.playSound(D)}
              />
              <li
                className="black cs key"
                data-key="85"
                onClick={() => this.playSound(Dsharp)}
              />
              <li
                className="white c key"
                data-key="74"
                onClick={() => this.playSound(E)}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
