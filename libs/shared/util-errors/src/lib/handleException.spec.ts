import { handleException } from './handleException';

describe('handleException', () => {
  it('should be ok with string', () => {
    expect(handleException('test')).toEqual('test');
  });
  it('should be ok with object', () => {
    expect(handleException({ message: 'test1' })).toEqual('test1');
  });
});
