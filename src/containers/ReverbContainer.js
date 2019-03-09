import React from 'react';
import Reverb from '../components/Reverb';

export default class ReverbContainer extends React.Component {
  render() {
    const { getReverb } = this.props;
    return (
      <div>
        <Reverb getReverb={getReverb} />
      </div>
    );
  }
}
