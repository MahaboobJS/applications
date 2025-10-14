import { TextBase, TextProps } from './TextBase';

export function TextMedium({ children, ...props }: TextProps) {
  return (
    <TextBase sizes={[0.875, 1.125]} {...props}>
      {children}
    </TextBase>
  );
}
