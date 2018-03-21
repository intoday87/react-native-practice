import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Greeting = props => (
  <Text>Hello {props.name}</Text>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;

