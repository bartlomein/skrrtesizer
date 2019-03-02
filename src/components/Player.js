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
    const { sound, crusher, delay, reverb, phaser } = this.props;

    let player = new Tone.Player({
      url: sound,
      autostart: true
    })
      .connect(crusher)
      .connect(delay)
      .connect(reverb)
      .connect(phaser)
      .toMaster();
    console.log(phaser);
    this.setState({ sample: player });

    return player;
  };

  render() {
    return <div />;
  }
}
