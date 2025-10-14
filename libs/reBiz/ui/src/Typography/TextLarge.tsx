import { TextBase, TextProps } from './TextBase';

export function TextLarge({ children, ...props }: TextProps) {
  return (
    <TextBase sizes={[1.25, 1.75]} {...props}>
      {children}
    </TextBase>
  );
}
