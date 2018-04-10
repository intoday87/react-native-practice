import Module from './module';
import $ from 'jquery';
jest.mock('jquery');

describe('Module', () => {

  beforeEach(() => {
    $.mockClear();
  });

  it('should return jquery set', () => {
    $.mockImplementation(() => {
      return {a:1};
    });

    const result = Module.get();

    expect($.mock.calls[0][0]).toBe('#a');
    expect(result).toEqual({a:1});
  });

});
