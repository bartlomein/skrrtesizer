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

import ReverbContainer from './containers/ReverbContainer';
import PingPongDelayContainer from './containers/PingPongDelayContainer';
import PhaserContainer from './containers/PhaserContainer';

class App extends React.Component {
  state = {
    fired: false,
    sound: null,
    sound2: null,
    sound3: null,
    reverb: null,
    reverbRoomSize: 0,
    reverbFrequency: 2000,
    delay: null,
    delaySpeed: 0,
    delayFeedback: 0.8,
    crusher: null,
    phaser: null,
    phaserOctaves: 0,
    phaserFrequency: 2000,
    phaserBaseFrequency: 2000
  };

  componentWillMount() {
    window.addEventListener('keydown', this.playSoundOnKeyboard);
    window.addEventListener('keyup', this.removeTransition);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  returnDelayTimeValue = (event, time) => {
    this.setState({
      delaySpeed: time
    });
  };
  returnFeedbackValue = (event, feedback) => {
    this.setState({
      delayFeedback: feedback
    });
  };
  returnRoomSizeReverbValue = (event, roomSize) => {
    this.setState({
      reverbRoomSize: roomSize.toFixed(2)
    });
  };
  returnReverbFrequencyValue = (event, frequency) => {
    this.setState({
      reverbFrequency: frequency
    });
  };

  returnPhaserOctaves = (event, octaves) => {
    this.setState({
      phaserOctaves: octaves
    });
  };
  returnPhaserFrequency = (event, frequency) => {
    this.setState({
      phaserFrequency: frequency
    });
  };
  returnPhaserBaseFrequency = (event, baseFrequency) => {
    this.setState({
      phaserBaseFrequency: baseFrequency
    });
  };

  returnPhaser;

  playSoundOnKeyboard = e => {
    const { sound, sound2, sound3 } = this.state;
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    const skrrt = document.querySelector('.skrrt-animation');

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

  playSound = (sound, key) => {
    const clickedKey = document.querySelector(`li[data-key="${key}"]`);

    clickedKey.classList.add('playing');
    clickedKey.classList.add('active');

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

  onMouseRelease = key => {
    const clickedKey = document.querySelector(`li[data-key="${key}"]`);

    if (clickedKey.classList.contains('playing')) {
      clickedKey.classList.remove('playing');
    }
    if (clickedKey.classList.contains('active')) {
      clickedKey.classList.remove('active');
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
        const skrrt = document.querySelector('.skrrt-animation');

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
    const {
      sound,
      reverb,
      reverbRoomSize,
      reverbFrequency,
      delay,
      phaser,
      delaySpeed,
      delayFeedback,
      phaserOctaves,
      phaserBaseFrequency,
      phaserFrequency
    } = this.state;

    return (
      <div className="App">
        {sound !== null ? (
          <Player sound={sound} reverb={reverb} delay={delay} phaser={phaser} />
        ) : null}

        <div className="synth-logo">
          <div className="skrrt-animation">
            <Skrrrt />
          </div>
          <div className="esizer">
            <img src={esizer} alt="" />
          </div>
        </div>
        <div className="effect-line first-effect-line">
          <PingPongDelayContainer
            getDelay={this.getDelay}
            time={delaySpeed}
            feedback={delayFeedback}
            returnDelayTimeValue={this.returnDelayTimeValue}
            returnFeedbackValue={this.returnFeedbackValue}
          />
          <ReverbContainer
            getReverb={this.getReverb}
            returnRoomSizeReverbValue={this.returnRoomSizeReverbValue}
            returnReverbFrequencyValue={this.returnReverbFrequencyValue}
            roomSize={reverbRoomSize}
            frequency={reverbFrequency}
          />
          <PhaserContainer
            getPhaser={this.getPhaser}
            returnPhaserOctaves={this.returnPhaserOctaves}
            returnPhaserFrequency={this.returnPhaserFrequency}
            returnPhaserBaseFrequency={this.returnPhaserBaseFrequency}
            octaves={phaserOctaves}
            frequency={phaserFrequency}
            baseFrequency={phaserBaseFrequency}
          />
        </div>
        <div className="keys">
          <div className="piano">
            <ul className="set">
              <li
                className="white f key"
                data-key="65"
                onMouseDown={() => this.playSound(F, 65)}
                onMouseUp={() => this.onMouseRelease(65)}
                onTouchStart={() => this.playSound(F, 65)}
                onTouchEnd={() => this.onMouseRelease(65)}
              />
              <li
                className="black fs key"
                data-key="87"
                onMouseDown={() => this.playSound(Fsharp, 87)}
                onMouseUp={() => this.onMouseRelease(87)}
                onTouchStart={() => this.playSound(Fsharp, 87)}
                onTouchEnd={() => this.onMouseRelease(87)}
              />
              <li
                className="white g key"
                data-key="83"
                onMouseDown={() => this.playSound(G, 83)}
                onMouseUp={() => this.onMouseRelease(83)}
                onTouchStart={() => this.playSound(G, 83)}
                onTouchEnd={() => this.onMouseRelease(83)}
              />
              <li
                className="black gs key"
                data-key="69"
                onMouseDown={() => this.playSound(Gsharp, 69)}
                onMouseUp={() => this.onMouseRelease(69)}
                onTouchStart={() => this.playSound(Gsharp, 69)}
                onTouchEnd={() => this.onMouseRelease(69)}
              />
              <li
                className="white a key"
                data-key="68"
                onMouseDown={() => this.playSound(A, 68)}
                onMouseUp={() => this.onMouseRelease(68)}
                onTouchStart={() => this.playSound(A, 68)}
                onTouchEnd={() => this.onMouseRelease(68)}
              />
              <li
                className="black as key"
                data-key="82"
                onMouseDown={() => this.playSound(Asharp, 82)}
                onMouseUp={() => this.onMouseRelease(82)}
                onTouchStart={() => this.playSound(Asharp, 82)}
                onTouchEnd={() => this.onMouseRelease(82)}
              />
              <li
                className="white b key f"
                data-key="70"
                onMouseDown={() => this.playSound(B, 70)}
                onMouseUp={() => this.onMouseRelease(70)}
                onTouchStart={() => this.playSound(B, 70)}
                onTouchEnd={() => this.onMouseRelease(70)}
              />
              <li
                className="white e key"
                data-key="71"
                onMouseDown={() => this.playSound(C, 71)}
                onMouseUp={() => this.onMouseRelease(71)}
                onTouchStart={() => this.playSound(C, 71)}
                onTouchEnd={() => this.onMouseRelease(71)}
              />
              <li
                className="black ds key"
                data-key="89"
                onMouseDown={() => this.playSound(Csharp, 89)}
                onMouseUp={() => this.onMouseRelease(89)}
                onTouchStart={() => this.playSound(Csharp, 89)}
                onTouchEnd={() => this.onMouseRelease(89)}
              />
              <li
                className="white d key"
                data-key="72"
                onMouseDown={() => this.playSound(D, 72)}
                onMouseUp={() => this.onMouseRelease(72)}
                onTouchStart={() => this.playSound(D, 72)}
                onTouchEnd={() => this.onMouseRelease(72)}
              />
              <li
                className="black cs key"
                data-key="85"
                onMouseDown={() => this.playSound(Dsharp, 85)}
                onMouseUp={() => this.onMouseRelease(85)}
                onTouchStart={() => this.playSound(Dsharp, 85)}
                onTouchEnd={() => this.onMouseRelease(85)}
              />
              <li
                className="white c key"
                data-key="74"
                onMouseDown={() => this.playSound(E, 74)}
                onMouseUp={() => this.onMouseRelease(74)}
                onTouchStart={() => this.playSound(E, 74)}
                onTouchEnd={() => this.onMouseRelease(74)}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
