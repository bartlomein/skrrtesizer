import React from 'react';
import Tone from 'tone';

export default class Reverb extends React.Component {
  componentDidMount() {
    this.returnReverb();
  }

  returnReverb() {
    var freeverb = new Tone.Freeverb().toMaster();
    freeverb.dampening.value = 100000;

    this.props.getReverb(freeverb);
    return freeverb;
  }
  render() {
    return <div />;
  }
}
