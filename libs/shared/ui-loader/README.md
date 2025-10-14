# Loading Library Documentation (shared-ui-loader)

The Loading library provides utilities for managing loading states in React applications. It includes hooks and components for displaying loading indicators and managing loading states.

## Running unit tests

Run `nx test shared-ui-loader` to execute the unit tests via [Jest](https://jestjs.io).

## Usage

### `useLoading` Hook

The `useLoading` hook allows you to manage loading states and render loading indicators. It provides options for different types of loaders and customizing their appearance.

#### Example showing a spinner

```typescript
import React from 'react';
import { useLoading, LoaderType } from '@ruyyaan/shared/ui-loading';

const MyComponent: React.FC = () => {
  const { isLoading, startLoader, stopLoader, renderLoader } = useLoading('spinner');

  return (
    <div>
      {isLoading && renderLoader()}
      {!isLoading && <p>Your component content</p>}
    </div>
  );
};

export default MyComponent;
```

#### Example showing progress

```typescript
import React from 'react';
import { useLoading, LoaderType } from '@ruyyaan/shared/ui-loading';

const MyComponent: React.FC = () => {
  const { startLoader, stopLoader } = useLoading('progress');
  const isLoading = true;

    React.useEffect(() => {
    if (loading) {
      startLoader();
    } else {
      stopLoader();
    }

    return () => {
      stopLoader();
    };
  }, [loading, startLoader, stopLoader]);

  return (
    <div>
      <!-- your component -->
    </div>
  );
};

export default MyComponent;
```

### `WithLoading` Component

The `WithLoading` component is a higher-order component that wraps your content and automatically manages loading states. It simplifies the process of displaying loading indicators around your components.

#### Example showing a spinner

```typescript
import React, { useState } from 'react';
import { WithLoading, LoaderType } from '@ruyyaan/shared/ui-loading';

const MyComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <WithLoading loaderType="spinner" isLoading={isLoading}>
        <p>Your component content</p>
      </WithLoading>
    </div>
  );
};

export default MyComponent;
```

#### Example using a custom loader

```typescript
import React, { useState } from 'react';
import { WithLoading, LoaderType } from '@ruyyaan/shared/ui-loading';
import { Loading } from '@ruyyaan/shared/ui';

const MyComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <WithLoading loaderType="custom" isLoading={isLoading} CustomLoaderComponent={Loading}>
      <p>Your component content</p>
    </WithLoading>
  );
};

export default MyComponent;
```

## API Reference

### `useLoading` Hook

#### Parameters

- `loaderType: LoaderType`: Specifies the type of loader to use ('spinner', 'skeleton', 'progress', 'custom').
- `sx?: SxProps`: Custom styles to apply to the loader.
- `CustomLoaderComponent?: React.ComponentType<object>`: Custom loader component to use.

#### Returns

- `isLoading: boolean`: Current loading state.
- `startLoader(): void`: Function to start the loader.
- `stopLoader(): void`: Function to stop the loader.
- `renderLoader(): React.ReactNode`: Function to render the loader based on the loading state and options.

### `WithLoading` Component

#### Props

- `loaderType: LoaderType`: Specifies the type of loader to use ('spinner', 'skeleton', 'progress', 'custom').
- `isLoading: boolean`: Current loading state.
- `sx?: SxProps`: Custom styles to apply to the loader.
- `CustomLoaderComponent?: React.ComponentType<object>`: Custom loader component to use.
- `children: ReactNode`: Content to display when not loading.
