import React from 'react';
import Tone from 'tone';

export default class PingPongDelay extends React.Component {
  componentDidMount() {
    this.returnPingPong();
  }

  returnPingPong() {
    var pingPong = new Tone.PingPongDelay('16', 0.6).toMaster();
    this.props.getDelay(pingPong);
    return pingPong;
  }
  render() {
    return <div />;
  }
}
