import { Card, useTheme } from '@mui/material';

import { Layout, Typography, Styles } from '@ruyyaan/shared/ui';

type Props = {
  title: string;
  subTitle?: string;
  detailsList: { boldText: string; normalText: string }[];
};
export const DetailsCard = ({ title, subTitle, detailsList }: Props) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: '16px 20px',
      }}
    >
      <Layout.BoxVertical sx={{ gap: Styles.sizes.pixels._1 }}>
        <Layout.BoxVertical spacing="none">
          <Typography.Title.ExtraSmall text={title} />
          {subTitle && (
            <Typography.General.Subtitle
              text={subTitle}
              sx={{ color: theme.palette.text.disabled }}
            />
          )}
        </Layout.BoxVertical>
        <>
          {detailsList.map((listItem) => (
            <Layout.BoxVertical spacing="none" key={listItem.normalText}>
              <Typography.General.Subtitle
                text={listItem.boldText}
                sx={{ color: theme.palette.text.disabled }}
              />
              <Typography.General.SubtitleBold text={listItem.normalText} />
            </Layout.BoxVertical>
          ))}
        </>
      </Layout.BoxVertical>
    </Card>
  );
};
