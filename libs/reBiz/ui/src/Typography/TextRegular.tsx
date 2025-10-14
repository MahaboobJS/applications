import { TextBase, TextProps } from './TextBase';

export function TextRegular({ children, ...props }: TextProps) {
  return (
    <TextBase sizes={[1, 1.5]} {...props}>
      {children}
    </TextBase>
  );
}
