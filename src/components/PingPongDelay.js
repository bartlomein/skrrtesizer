import React from 'react';
import Tone from 'tone';

export default class PingPongDelay extends React.Component {
  componentDidMount() {
    this.returnPingPong();
  }

  returnPingPong() {
    const { time, wet, getDelay } = this.props;
    let pingPong = new Tone.PingPongDelay(time, wet).toMaster();
    getDelay(pingPong);
    return pingPong;
  }
  render() {
    return <div />;
  }
}
