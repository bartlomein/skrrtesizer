import React from 'react';
import Tone from 'tone';

export default class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sample: null
    };
  }

  returnSound = () => {
    let player = new Tone.Player({
      url: this.props.sound,
      autostart: true
    }).toMaster();
    console.log(player);
    this.setState({ sample: player });
    return player;
  };

  render() {
    console.log('player');
    return <div> {this.state.sample}</div>;
  }
}
