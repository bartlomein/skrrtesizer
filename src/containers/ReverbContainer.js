import React from 'react';
import Reverb from '../components/Reverb';
import Tone from 'tone';

export default class ReverbContainer extends React.Component {
  componentDidMount() {
    this.returnReverb();
  }

  returnReverb() {
    const { roomSize, frequency } = this.props;
    let freeverb = new Tone.Freeverb(roomSize, frequency).toMaster();

    this.props.getReverb(freeverb);
    return freeverb;
  }
  render() {
    const {
      roomSize,
      frequency,
      returnRoomSizeReverbValue,
      returnReverbFrequencyValue
    } = this.props;
    return (
      <div>
        <Reverb
          roomSize={roomSize}
          frequency={frequency}
          returnRoomSizeReverbValue={returnRoomSizeReverbValue}
          returnReverbFrequencyValue={returnReverbFrequencyValue}
        />
      </div>
    );
  }
}
