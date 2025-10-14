import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from 'styled-components';

import { Styles } from '../../styles';
import { Layout } from '../layout';

const LabelWrapper = (isActive: boolean, activeColor: string, inactiveColor: string) => {
  const buttonColor = isActive ? activeColor : inactiveColor;
  return styled.div`
    color: ${buttonColor};
  `;
};

type ButtonData = {
  buttonComponent?: React.FC;
  contentComponent?: React.FC;
  value: string;
  label?: string;
};

type Props = {
  label: string;
  data: ButtonData[];
  isVertical: boolean;
  applyStylesFn?: (isActive: boolean) => React.CSSProperties;
  buttonsLabelStyle?: {
    activeButtonTextColor: string;
    inactiveButtonTextColor: string;
  };
  onClick: (value: string) => void;
};
export const ButtonsGrouped = ({
  label,
  data,
  onClick,
  isVertical = true,
  applyStylesFn,
  buttonsLabelStyle = {
    activeButtonTextColor: Styles.colors.text.default,
    inactiveButtonTextColor: Styles.colors.text.interactive.default,
  },
}: Props) => {
  const [value, setValue] = React.useState<string | null>(data[0].value);

  const handleValue = (_event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      setValue(newValue);
      onClick(newValue);
    }
  };

  const showingButton = data.find((button) => button.value === value);
  const ShowingComponent = showingButton ? showingButton.contentComponent : null;

  return (
    <>
      <ToggleButtonGroup value={value} exclusive onChange={handleValue} aria-label={label}>
        {data.map((button) => {
          const isActive = button.value === value;

          const ColoredLabelWrapper = LabelWrapper(
            isActive,
            buttonsLabelStyle?.activeButtonTextColor,
            buttonsLabelStyle?.inactiveButtonTextColor
          );

          const props = {
            key: button.value,
            value: button.value,
            'aria-label': button.label,
            sx: applyStylesFn && applyStylesFn(isActive),
          };

          if (button.buttonComponent) {
            const Component = button.buttonComponent;
            const ContainerLayout = isVertical ? Layout.BoxVertical : Layout.BoxHorizontal;
            const ContainerLayoutSx: React.CSSProperties = isVertical
              ? {
                  position: 'relative',
                }
              : {};
            const centerBoxLayoutSx: React.CSSProperties = isVertical
              ? {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }
              : {};

            return (
              <ToggleButton {...props}>
                <ContainerLayout sx={ContainerLayoutSx}>
                  <Component />
                  <Layout.BoxCenter sx={centerBoxLayoutSx}>
                    <ColoredLabelWrapper>{button.label}</ColoredLabelWrapper>
                  </Layout.BoxCenter>
                </ContainerLayout>
              </ToggleButton>
            );
          }
          return (
            <ToggleButton {...props}>
              <ColoredLabelWrapper>{button.label}</ColoredLabelWrapper>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      {ShowingComponent && <ShowingComponent />}
    </>
  );
};
