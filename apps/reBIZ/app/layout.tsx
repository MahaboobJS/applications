'use client';
import * as React from 'react';

import { MainApp } from './MainApp';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return <MainApp>{children}</MainApp>;
}
