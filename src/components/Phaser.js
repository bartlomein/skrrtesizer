import React from 'react';

import RangeSlider from '../components/RangeSlider';

export default class Phaser extends React.Component {
  render() {
    const {
      octaves,
      frequency,
      baseFrequency,
      returnPhaserOctaves,
      returnPhaserFrequency,
      returnPhaserBaseFrequency
    } = this.props;
    return (
      <div className="reverb-effect-component effect-component">
        <div className="reverb-name effect-name">Phaser</div>
        <div className="room-size-slider slider-with-text">
          <span className="effect-property-name">Octaves: </span>
          <span className="effect-number-display">{octaves}</span>
          <RangeSlider
            value={octaves}
            aria-labelledby="time"
            handleChange={returnPhaserOctaves}
            min={0}
            max={24}
            step={1}
          />
        </div>
        <div className="reverb-frequency-slider slider-with-text">
          <span className="effect-property-name">Frequency: </span>
          <span className="effect-number-display">{frequency}</span>
          <RangeSlider
            value={frequency}
            aria-labelledby="time"
            handleChange={returnPhaserFrequency}
            min={0}
            max={16000}
            step={50}
          />
        </div>
        <div className="reverb-frequency-slider slider-with-text">
          <span className="effect-property-name">Base Frequency: </span>
          <span className="effect-number-display">{baseFrequency}</span>
          <RangeSlider
            value={baseFrequency}
            aria-labelledby="time"
            handleChange={returnPhaserBaseFrequency}
            min={0}
            max={16000}
            step={50}
          />
        </div>
      </div>
    );
  }
}
