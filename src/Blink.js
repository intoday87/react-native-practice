import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => {
      this.setState(previousState => ({ isShowingText: !previousState.isShowingText }));
    }, 1000);
  }

  render() {
    return (
      <Text>{this.state.isShowingText ? this.props.text : ''}</Text>
    );
  }
}

Blink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Blink;
