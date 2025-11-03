import * as React from 'react';

import { TextRegular } from '../../Typography';

export const StyledTableCell = ({ renderedCellValue }: { renderedCellValue: React.ReactNode }) => (
  <TextRegular weight="normal">{renderedCellValue}</TextRegular>
);
