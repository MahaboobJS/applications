import * as React from 'react';

import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';

// note: cannot type these because then the storybook fails to compile?
// const providerDecorator = (Story: StoryFn, context: StoryContext) => (
const providerDecorator = (Story, context) => <Story {...context} />;

export const decorators = [providerDecorator];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
      },
      decorator: providerDecorator,
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    docs: {
      container: (props: React.PropsWithChildren<DocsContainerProps>) => (
        <DocsContainer {...props} />
      ),
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [providerDecorator, (Story) => <Story />],
};

export default preview;
