'use client';
import * as React from 'react';

import { Buttons, Layout } from '@ruyyaan/shared/ui';
import { Icons } from '@ruyyaan/shared/ui-icons';

import { PrimaryLink } from '../../Links';
import { TextRegular } from '../../Typography';

// eslint-disable-next-line  @typescript-eslint/no-unused-vars
export function TableWidget<DataType>({
  newRef,
  title,
  onClickSeeAll,
  children,
}: Readonly<
  React.PropsWithChildren<{
    newRef: string;
    title: string;
    onClickSeeAll?: () => void;
  }>
>) {
  return (
    <Layout.BoxVertical>
      <Layout.Edges>
        <TextRegular weight="bold">{title}</TextRegular>
        <Layout.BoxHorizontal>
          <Icons.Add />
          <PrimaryLink href={newRef}>
            <TextRegular weight="normal" variant="title">
              Add New
            </TextRegular>
          </PrimaryLink>
        </Layout.BoxHorizontal>
      </Layout.Edges>
      {children}
      <Buttons.PrimaryButton onClick={onClickSeeAll} text="See All" />
    </Layout.BoxVertical>
  );
}
