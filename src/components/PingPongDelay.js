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
      <div className="ping-pong-delay-component effect-component">
        <div className="delay-name effect-name">Ping Pong Delay</div>
        <div className="time-slider">
          <span className="effect-property-name">Time: </span>
          <span className="ping-pong-time-display">{time}</span>
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
          <span className="effect-property-name"> Feedback: </span>
          <span className="ping-pong-feedback-display">{feedback}</span>
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
