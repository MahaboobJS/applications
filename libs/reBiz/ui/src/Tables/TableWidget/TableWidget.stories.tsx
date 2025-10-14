import type { Meta } from '@storybook/react';
import { createMRTColumnHelper } from 'material-react-table';

import { StyledTableCell } from '../styles/getStyledTableCell';
import { StyledTableHeader } from '../styles/StyledTableHeader';

import { TableWidget } from './TableWidget';

const Story: Meta<typeof TableWidget> = {
  component: TableWidget,
  title: 'Work Permit / UI / TableWidget',
};
export default Story;

type Data = Record<string, string>;
const columnHelper = createMRTColumnHelper<Data>(); // TS now knows the shape of your data

const columns = [
  columnHelper.accessor('name', {
    header: 'name',
    Header: StyledTableHeader('Name'),
    Cell: StyledTableCell,
  }),
  columnHelper.accessor('email', {
    header: 'email',
    Header: StyledTableHeader('Email'),
    Cell: StyledTableCell,
  }),
];

const data = [
  {
    name: 'John Doe',
  },
];

export const Primary = {
  args: {
    columns,
    data,
    newRef: '/new',
    title: 'Test Table',
  },
};
