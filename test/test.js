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

describe('Link', () => {

  it('have a link of facebook', () => {
    const testRenderer = renderer.create(<Link page="www.facebook.com">fuck you</Link>);

    expect(testRenderer.toJSON().type).toBe('a');
    expect(testRenderer.toJSON().props.href).toBe('www.facebook.com');
    expect(testRenderer.toJSON().children).toContain('fuck you');
  });
});

describe('jest mock', () => {

  const forEach = (items, callback) => {
    for (let i = 0; i < items.length; ++i) {
      callback(items[i], i);
    }
  }

  it('spec name', () => {
    const mockCallback = jest.fn();

    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
  });

  it('spec name2', () => {
    const mockCallback = jest.fn();

    forEach([5, 1], mockCallback);

    expect(mockCallback.mock.calls[0][0]).toBe(5);
    expect(mockCallback.mock.calls[0][1]).toBe(0);
  });

  it('should ', () => {
    const myMock = jest.fn();

    const a = new myMock('fuck');
    a.name = 'test name';

    expect(myMock.mock.instances.length).toBe(1);
    expect(myMock.mock.calls[0][0]).toEqual('fuck');
    expect(myMock.mock.instances[0].name).toEqual('test name')
  });

});
