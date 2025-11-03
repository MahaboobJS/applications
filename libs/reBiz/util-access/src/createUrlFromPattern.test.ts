import { createUrlFromPattern } from './createUrlFromPattern';

describe('createUrlFromPattern', () => {
  it('should return the URL with replaced parameters when given a valid pattern and params', () => {
    const pattern = { url: '/users/:id/posts/:postId' };
    const params = { id: '123', postId: '456' };
    const result = createUrlFromPattern(pattern.url, params);
    expect(result).toBe('/users/123/posts/456');
  });

  it('should also work with just a custom pattern', () => {
    const pattern = { url: '/short/:custom/test' };
    const params = { custom: '789' };
    const result = createUrlFromPattern(pattern.url, params);
    expect(result).toBe('/short/789/test');
  });

  it('should throw an error when missing required parameters', () => {
    const pattern = { url: '/users/:id/posts/:postId' };
    const params = { id: '123' };
    expect(() => {
      createUrlFromPattern(pattern.url, params);
    }).toThrow(`Parameter 'postId' is missing for the pattern: ${pattern.url}`);
  });
});
