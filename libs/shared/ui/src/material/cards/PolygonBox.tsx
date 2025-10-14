import * as React from 'react';

import styled from 'styled-components';

import { Styles } from '../../styles';

type BoxProps = {
  width?: string;
  height?: string;
  useAlternativeClipPath?: boolean;
  children?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
};

const clipPath1 = 'polygon(100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%, 10% 0)';
const clipPath2 = 'polygon(100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%, 0 0)';

const OuterSide = styled.div<BoxProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => (props.borderColor ? props.borderColor : Styles.colors.surface.muted)};
  -webkit-clip-path: ${(props) => (props.useAlternativeClipPath ? clipPath2 : clipPath1)};
  clip-path: ${(props) => (props.useAlternativeClipPath ? clipPath2 : clipPath1)};
  border-radius: 5px;
`;

const InnerSide = styled.div<BoxProps>`
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Styles.colors.surface.interactive.default};
  -webkit-clip-path: ${(props) => (props.useAlternativeClipPath ? clipPath2 : clipPath1)};
  clip-path: ${(props) => (props.useAlternativeClipPath ? clipPath2 : clipPath1)};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-indent: 10px;
`;

export const PolygonBox: React.FC<BoxProps> = ({
  width = '200px',
  height = '50px',
  useAlternativeClipPath = false,
  backgroundColor,
  borderColor,
  children,
}) => {
  return (
    <OuterSide
      width={width}
      height={height}
      useAlternativeClipPath={useAlternativeClipPath}
      borderColor={borderColor}
    >
      <InnerSide useAlternativeClipPath={useAlternativeClipPath} backgroundColor={backgroundColor}>
        {children}
      </InnerSide>
    </OuterSide>
  );
};
