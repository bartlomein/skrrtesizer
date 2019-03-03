import React from 'react';
import Tone from 'tone';

export default class GrainPlayer extends React.Component {
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

    let player = new Tone.GrainPlayer({
      url: sound
    })
      .connect(delay)
      .connect(reverb)
      .connect(phaser)
      .toMaster();

    this.setState({ sample: player });

    return player;
  };

  render() {
    return <div />;
  }
}
