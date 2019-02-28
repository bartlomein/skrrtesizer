import React from 'react';
import Tone from 'tone';

export default class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sample: null
    };
  }

  componentDidMount() {
    this.returnSound();
  }

  returnSound = () => {
    let player = new Tone.Player({
      url: this.props.sound,
      autostart: true
    }).toMaster();
    console.log(player);
    this.setState({ sample: player });
    new Tone.Reverb([2]);

    return player;
  };

  render() {
    console.log('player');
    console.log(this.state.sample);
    return <div />;
  }
}
