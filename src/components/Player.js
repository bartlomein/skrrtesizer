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
  componentDidUpdate() {
    this.returnSound();
  }

  returnSound = () => {
    const { sound, delay, reverb, phaser } = this.props;

    let player = new Tone.Player({
      url: sound,
      autostart: true
    })
      .connect(delay)
      .connect(reverb)
      .connect(phaser)
      .toMaster();

    this.setState({ sample: player });

    return player;
  };

  render() {
    console.log('render in');

    return <div />;
  }
}
