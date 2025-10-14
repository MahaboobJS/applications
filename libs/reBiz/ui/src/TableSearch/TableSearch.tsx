import React from 'react';

import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Layout, Styles } from '@ruyyaan/shared/ui';
import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';

type Props = {
  placeholder?: string;
  onChange: (value: string) => void;
};
export const TableSearch = ({ placeholder = 'Search Permit', onChange }: Props) => {
  const theme = useTheme();
  const [filterText, setFilterText] = React.useState('');

  React.useEffect(() => {
    const searchTimeout = setTimeout(() => {
      onChange(filterText);
    }, 500);

    return () => clearTimeout(searchTimeout);
  }, [filterText, onChange]);

  const handleTextChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  }, []);

  return (
    <Layout.FlexBox sx={{ position: 'relative' }}>
      <TextField
        inputProps={{ style: { paddingLeft: '25px' } }}
        onChange={handleTextChange}
        placeholder={placeholder}
        variant="standard"
        fullWidth={true}
      />
      <Icon
        iconName={IconsList.search}
        sx={{
          position: 'absolute',
          color: theme.palette.secondary.main,
          left: 0,
          bottom: 8,
          fontSize: Styles.sizes.pixels._3,
        }}
      />
    </Layout.FlexBox>
  );
};
