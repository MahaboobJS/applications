import { render, screen } from '@testing-library/react';

import { StyleProvider, useTheme } from './StyleProvider';

describe('StyleProvider', () => {
  it('provides the light theme by default', () => {
    const TestComponent = () => {
      const theme = useTheme();
      return <div>{theme.border.default}</div>;
    };

    render(
      <StyleProvider>
        <TestComponent />
      </StyleProvider>
    );

    expect(screen.getByText('#D9D9D9')).toBeInTheDocument();
  });

  it('provides the dark theme when specified', () => {
    const TestComponent = () => {
      const theme = useTheme();
      return <div>{theme.border.default}</div>;
    };

    render(
      <StyleProvider theme="dark">
        <TestComponent />
      </StyleProvider>
    );

    expect(screen.getByText('#666666')).toBeInTheDocument();
  });

  it('extends the theme when specified (just one key)', () => {
    const TestComponent = () => {
      const theme = useTheme();
      return (
        <>
          <div>default:{theme.text.default}</div>
          <div>existing:{theme.text.muted}</div>
        </>
      );
    };

    render(
      <StyleProvider
        themeExtensions={{
          text: {
            default: 'custom-value',
          },
        }}
      >
        <TestComponent />
      </StyleProvider>
    );

    expect(screen.getByText('default:custom-value')).toBeInTheDocument();
    expect(screen.getByText('existing:#888888')).toBeInTheDocument();
  });
});
