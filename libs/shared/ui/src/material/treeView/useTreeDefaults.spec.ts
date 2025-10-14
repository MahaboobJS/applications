import { renderHook } from '@testing-library/react';

import { useTreeDefaults } from './useTreeDefaults';

describe('useTreeDefaults', () => {
  it('should be ok', () => {
    const { result } = renderHook(() => useTreeDefaults({ pathname: '/0/1/2', routePrefix: '/0' }));

    expect(result.current).toEqual({
      defaultSelected: '/0/1/2',
      defaultExpanded: ['/0/1', '/0/1/2'],
    });
  });
});
