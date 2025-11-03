'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function CustomTabPanel(props: Readonly<TabPanelProps>) {
  const { children, value, index, ...other } = props;

  const styles =
    value === index
      ? {
          flexDirection: 'column',
          display: 'flex',
          flex: 1,
        }
      : {};

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`ruyyaan-tabpanel-${index}`}
      aria-labelledby={`ruyyaan-tab-${index}`}
      sx={styles}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

export function TabBar({
  tabs,
}: Readonly<{
  tabs: { label: string; value: React.ReactElement }[];
}>) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tab bar">
          {tabs.map((tab, index) => (
            <Tab
              id={`ruyyaan-tab-${index}`}
              key={`ruyyaan-tab-${index}`}
              aria-controls={`ruyyaan-tabpanel-${index}`}
              label={tab.label}
              sx={{ textTransform: 'none', fontSize: '0.95rem' }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={tab.label}>
          {tab.value}
        </CustomTabPanel>
      ))}
    </>
  );
}
