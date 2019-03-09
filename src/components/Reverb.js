import React from 'react';
import RangeSlider from '../components/RangeSlider';

export default class Reverb extends React.Component {
  render() {
    const {
      roomSize,
      frequency,
      returnRoomSizeReverbValue,
      returnReverbFrequencyValue
    } = this.props;
    return (
      <div className="reverb-effect-component effect-component">
        <div className="reverb-name effect-name">Reverb</div>
        <div className="room-size-slider">
          <span className="effect-property-name">Room Size: </span>
          <span className="reverb-room-size-display">{roomSize}</span>
          <RangeSlider
            value={roomSize}
            aria-labelledby="time"
            handleChange={returnRoomSizeReverbValue}
            min={0}
            max={0.99}
            step={0.01}
          />
        </div>
        <div className="reverb-frequency-slider">
          <span className="effect-property-name">Frequency: </span>
          <span className="reverb-room-size-display">{frequency}</span>
          <RangeSlider
            value={frequency}
            aria-labelledby="time"
            handleChange={returnReverbFrequencyValue}
            min={0}
            max={16000}
            step={50}
          />
        </div>
      </div>
    );
  }
}
