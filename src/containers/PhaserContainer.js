import React from 'react';
import Phaser from '../components/Phaser';
import Tone from 'tone';

export default class PhaserContainer extends React.Component {
  componentDidMount() {
    this.returnPhaser();
  }
  componentDidUpdate(prevProps) {
    const { octaves, frequency, baseFrequency } = this.props;
    if (
      prevProps.frequency !== frequency ||
      prevProps.octaves !== octaves ||
      prevProps.baseFrequency !== baseFrequency
    ) {
      this.returnPhaser();
    }
  }

  returnPhaser() {
    const { getPhaser, frequency, octaves, baseFrequency } = this.props;

    let phaser = new Tone.Phaser({
      frequency: frequency,
      octaves: octaves,
      baseFrequency: baseFrequency
    }).toMaster();
    getPhaser(phaser);
    return phaser;
  }
  render() {
    const {
      frequency,
      octaves,
      baseFrequency,
      returnPhaserOctaves,
      returnPhaserFrequency,
      returnPhaserBaseFrequency
    } = this.props;
    return (
      <div>
        <Phaser
          frequency={frequency}
          octaves={octaves}
          baseFrequency={baseFrequency}
          returnPhaserOctaves={returnPhaserOctaves}
          returnPhaserFrequency={returnPhaserFrequency}
          returnPhaserBaseFrequency={returnPhaserBaseFrequency}
        />
      </div>
    );
  }
}
