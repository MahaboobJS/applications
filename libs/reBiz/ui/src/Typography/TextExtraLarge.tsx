import { TextBase, TextProps } from './TextBase';

export function TextExtraLarge({ children, ...props }: TextProps) {
  return (
    <TextBase sizes={[1.5, 2]} {...props}>
      {children}
    </TextBase>
  );
}
