import React from 'react';
import Tone from 'tone';

export default class Phaser extends React.Component {
  componentDidMount() {
    this.returnPhaser();
  }

  returnPhaser() {
    const { getPhaser, frequency, octaves, baseFrequency } = this.props;

    let phaser = new Tone.Phaser({
      frequency: 105,
      octaves: 10,
      baseFrequency: 4000
    }).toMaster();

    getPhaser(phaser);

    return phaser;
  }
  render() {
    return <div />;
  }
}
