import React from 'react';
import Tone from 'tone';

export default class BitCrusher extends React.Component {
  componentDidMount() {
    this.returnBitCrusher();
  }

  returnBitCrusher() {
    const { getBitCrusher, crushNumber } = this.props;

    let crusher = new Tone.BitCrusher(crushNumber).toMaster();
    getBitCrusher(crusher);

    return crusher;
  }
  render() {
    return <div />;
  }
}
