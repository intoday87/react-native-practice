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
    for (let i = 0; i < items.length; i += 1) {
      callback(items[i], i);
    }
  };

  it('verify call length', () => {
    const mockCallback = jest.fn();

    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls).toHaveLength(2);
  });

  it('verify each argument of a call', () => {
    const mockCallback = jest.fn();

    forEach([5, 1], mockCallback);

    expect(mockCallback.mock.calls[0][0]).toBe(5);
    expect(mockCallback.mock.calls[0][1]).toBe(0);
  });

  it('verify instance', () => {
    const MyMock = jest.fn();

    const a = new MyMock('fuck');
    a.name = 'test name';

    expect(MyMock.mock.instances).toHaveLength(1);
    expect(MyMock.mock.calls[0][0]).toEqual('fuck');
    expect(MyMock.mock.instances[0].name).toEqual('test name');
  });

  it('return a value', () => {
    const myMock = jest.fn();

    myMock.mockReturnValueOnce(10);
    myMock.mockReturnValueOnce('fuck');
    myMock.mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toEqual('fuck');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);
  });

  it('should ', () => {
    const mockFilter = jest.fn();

    mockFilter.mockReturnValueOnce(true);
    mockFilter.mockReturnValueOnce(false);

    const result = [11, 12].filter(mockFilter);

    expect(result).toEqual([11]);
    expect(mockFilter.mock.calls).toHaveLength(2);
    expect(mockFilter.mock.calls).toEqual([
      [11, 0, [11, 12]],
      [12, 1, [11, 12]],
    ]);
  });
});
