import React from 'react';
import RangeSlider from '../components/RangeSlider';

export default class PingPongDelay extends React.Component {
  render() {
    const {
      time,
      feedback,
      returnDelayTimeValue,
      returnFeedbackValue
    } = this.props;

    return (
      <div className="ping-pong-delay-component">
        <div className="delay-name">Ping Pong Delay</div>
        <div className="time-slider">
          TIME
          <RangeSlider
            value={time}
            aria-labelledby="time"
            handleChange={returnDelayTimeValue}
            min={0}
            max={16}
            step={1}
          />
        </div>

        <div className="feedback-slider">
          FEEDBACK
          <RangeSlider
            value={feedback}
            aria-labelledby="feedback"
            handleChange={returnFeedbackValue}
            min={0}
            max={0.9}
            step={0.01}
          />
        </div>
      </div>
    );
  }
}
