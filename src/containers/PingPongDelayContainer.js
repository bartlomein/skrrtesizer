import React from 'react';
import Tone from 'tone';
import PingPongDelay from '../components/PingPongDelay';

export default class PingPongDelayContainer extends React.Component {
  componentDidMount() {
    this.returnPingPong();
  }
  componentDidUpdate(prevProps) {
    const { time, feedback, getDelay } = this.props;
    if (prevProps.time !== time || prevProps.feedback !== feedback) {
      let pingPong = new Tone.PingPongDelay(time, feedback).toMaster();
      getDelay(pingPong);
    }
  }

  returnPingPong() {
    const { time, feedback, getDelay } = this.props;
    let pingPong = new Tone.PingPongDelay(time, feedback).toMaster();
    getDelay(pingPong);
  }

  convertPingPongTime = oldTime => {
    let newTime = 1;
    console.log(newTime);
    if (oldTime === 1) {
      newTime = 1;
    } else if (oldTime % 2 === 1) {
      newTime = oldTime - 1 + 'n';
    } else {
      newTime = oldTime;
    }
    return newTime;
  };

  render() {
    const {
      time,
      feedback,
      returnDelayTimeValue,
      returnFeedbackValue
    } = this.props;
    return (
      <div className="ping-pong-delay-container">
        <PingPongDelay
          time={this.convertPingPongTime(time)}
          feedback={feedback}
          returnDelayTimeValue={returnDelayTimeValue}
          returnFeedbackValue={returnFeedbackValue}
        />
      </div>
    );
  }
}
