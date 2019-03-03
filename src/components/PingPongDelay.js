import React from 'react';
import Slider from 'rc-slider';
export default class PingPongDelay extends React.Component {
  render() {
    const { time, feedback } = this.props;
    return (
      <div>
        <div className="time-slider">
          <Slider
            maxValue={16}
            minValue={0}
            value={time}
            handle={() => this.returnDelayTimeValue}
          />
        </div>
      </div>
    );
  }
}
