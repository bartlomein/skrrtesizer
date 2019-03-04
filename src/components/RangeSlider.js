import React from 'react';

import Slider from '@material-ui/lab/Slider';

class RangeSlider extends React.Component {
  render() {
    const { min, max, value, handleChange, step } = this.props;

    return (
      <div className="range-slider">
        <Slider
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default RangeSlider;
