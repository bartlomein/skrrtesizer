import React from 'react';
import Tone from 'tone';
import PingPongDelay from '../components/PingPongDelay';

export default class PingPongDelayContainer extends React.Component {
  componentDidMount() {
    this.returnPingPong();
  }

  returnPingPong() {
    const { time, feedback, getDelay } = this.props;
    let pingPong = new Tone.PingPongDelay(time, feedback).toMaster();
    getDelay(pingPong);
    return pingPong;
  }
  render() {
    const { time, feedback, returnDelayTimeValue } = this.props;
    return (
      <div>
        <PingPongDelay
          time={time}
          feedback={feedback}
          returnDelayTimeValue={returnDelayTimeValue}
        />
      </div>
    );
  }
}
