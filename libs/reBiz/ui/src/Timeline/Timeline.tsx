'use client';
import { Timeline as MuiTimeline } from '@mui/lab';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Avatar, Box, useTheme } from '@mui/material';

import { Styles, Layout } from '@ruyyaan/shared/ui';
import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';

import { TextMedium, TextRegular } from '../Typography';

export type TimelineEvent = {
  id: string;
  date: string;
  description: string;
  users: {
    id: string;
    name: string;
    role?: string;
    image?: string;
  }[];
};

type TimelineProps = {
  events: TimelineEvent[];
};

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const theme = useTheme();

  return (
    <MuiTimeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        backgroundColor: theme.palette.primary.light,
        borderRadius: Styles.generic.borderSizesPixels._1,
      }}
    >
      {events.map((event, index) => (
        <TimelineItem key={event.id}>
          <TimelineSeparator>
            <TimelineDot color={index < events.length - 1 ? 'grey' : 'primary'} />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Layout.BoxVertical sx={{ mb: 2 }}>
              <Layout.BoxHorizontal sx={{ gap: '5px' }}>
                <TextMedium variant="muted">{event.description} on</TextMedium>
                <TextMedium>{event.date}</TextMedium>
              </Layout.BoxHorizontal>
              <Layout.BoxHorizontal sx={{ flexWrap: 'wrap', gap: '40px' }}>
                {event.users?.map((user) => (
                  <Layout.BoxHorizontal key={user.id}>
                    <Avatar src={user.image || undefined} alt={user.name}>
                      {!user.image && <Icon iconName={IconsList.user} />}
                    </Avatar>
                    <Box>
                      <TextRegular variant="normal">{user.name}</TextRegular>
                      <TextMedium variant="muted">{user.role}</TextMedium>
                    </Box>
                  </Layout.BoxHorizontal>
                ))}
              </Layout.BoxHorizontal>
            </Layout.BoxVertical>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};
