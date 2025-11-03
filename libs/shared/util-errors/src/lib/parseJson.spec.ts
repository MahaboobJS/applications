import { noop } from 'lodash';

import { parseJson } from './parseJson';

describe('parseJson', () => {
  let consoleMock: jest.SpyInstance;

  beforeEach(() => {
    consoleMock = jest.spyOn(console, 'error').mockImplementation(noop);
  });

  afterEach(() => {
    consoleMock.mockReset();
  });

  it('should parse JSON string correctly', () => {
    const data = JSON.stringify({ key: 'value' });
    expect(parseJson(data)).toEqual({ key: 'value' });
  });

  it('should throw error when JSON string is invalid', () => {
    const data = 'invalid json string';
    try {
      parseJson(data);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
