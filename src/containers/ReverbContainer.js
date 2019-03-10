import React from 'react';
import Reverb from '../components/Reverb';
import Tone from 'tone';

export default class ReverbContainer extends React.Component {
  componentDidMount() {
    this.returnReverb();
  }
  componentDidUpdate(prevProps) {
    const { roomSize, frequency } = this.props;
    if (prevProps.roomSize !== roomSize || prevProps.frequency !== frequency) {
      let freeverb = new Tone.Freeverb().toMaster();
      freeverb.dampening.value = frequency;
      freeverb.roomSize.value = roomSize;

      this.props.getReverb(freeverb);
    }
  }

  returnReverb() {
    const { roomSize, frequency } = this.props;
    let freeverb = new Tone.Freeverb().toMaster();
    freeverb.dampening.value = frequency;
    freeverb.roomSize.value = roomSize;
    this.props.getReverb(freeverb);
    freeverb.toMaster();

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
