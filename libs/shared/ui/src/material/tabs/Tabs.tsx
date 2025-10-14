import * as React from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

type TabItem = {
  value: string;
  label: string;
  icon?: React.ReactElement; // Use React.ReactElement type for the icon property
  disabled?: boolean;
  panelContentData: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  color?: string;
  inactiveColor?: string;
  labelProps?: SxProps;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, color, inactiveColor, labelProps }) => {
  const [value, setValue] = React.useState(tabs[0].value);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: inactiveColor || 'divider' }}>
          <TabList
            onChange={handleChange}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: color || 'inherit',
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                icon={tab.icon || ''}
                iconPosition="start"
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
                sx={{
                  ...labelProps,
                  color: inactiveColor || 'inherit',
                  '&.Mui-selected': { color: color || 'inherit' },
                }}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value} sx={{ flex: 1, paddingTop: '0 !important' }}>
            {tab.panelContentData}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};
