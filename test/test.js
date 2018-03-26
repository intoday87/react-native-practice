import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

Link.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

it('have a link of facebook', () => {
  const testRenderer = renderer.create(<Link page="www.facebook.com">fuck you</Link>);

  expect(testRenderer.toJSON().type).toBe('a');
  expect(testRenderer.toJSON().props.href).toBe('www.facebook.com');
  expect(testRenderer.toJSON().children).toContain('fuck you');
});
