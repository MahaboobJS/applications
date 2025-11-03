import * as React from 'react';

import { TextBase, TextProps } from './TextBase';

export const TextSmall = React.forwardRef<HTMLDivElement, TextProps>(
  ({ children, ...props }, ref) => {
    return (
      <TextBase ref={ref} sizes={[0.75, 1]} {...props}>
        {children}
      </TextBase>
    );
  }
);
