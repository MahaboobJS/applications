import { createMRTColumnHelper } from 'material-react-table';

import { TableWidget } from './TableWidget';
import { StyledTableCell } from '../styles/getStyledTableCell';
import { StyledTableHeader } from '../styles/StyledTableHeader';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof TableWidget> = {
  component: TableWidget,
  title: 'Rebiz / UI / TableWidget',
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
