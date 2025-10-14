import { screen, render } from '@testing-library/react';

import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  test('renders breadcrumbs with correct items', () => {
    const items = [
      { label: 'Home', href: '/', disabled: false },
      { label: 'Products', href: '/products', disabled: false },
      { label: 'Category', href: '/products/category', disabled: true },
    ];
    render(<Breadcrumbs items={items} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  test('renders advanced breadcrumbs', () => {
    const items = [
      {
        label: 'cm0xop2ka000xnc21p1c7jhuz',
        href: '/permits/cm0xop2ka000xnc21p1c7jhuz',
        disabled: false,
      },
    ];
    render(<Breadcrumbs items={items} />);
    expect(screen.getByText('Cm0xop2ka000xnc21p1c7jhuz')).toBeInTheDocument();
  });
});
