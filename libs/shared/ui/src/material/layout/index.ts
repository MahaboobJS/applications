import { BoxAbsolute } from './BoxAbsolute';
import { BoxCenter } from './BoxCenter';
import { BoxHorizontal } from './BoxHorizontal';
import { BoxRelative } from './BoxRelative';
import { BoxSpaced } from './BoxSpaced';
import { BoxVertical } from './BoxVertical';
import { Edges } from './Edges';
import { Expander } from './elements/Expander';
import { Spacer } from './elements/Spacer';
import { FlexBox } from './FlexBox';
import * as Layouts from './layouts';
import { PageContent } from './PageContent';
import { PageContentBox } from './PageContentBox';
import { Space } from './Space';

export const Layout = {
  Expander,
  Edges,
  Spacer,
  Space,
  BoxAbsolute,
  BoxRelative,
  BoxSpaced,
  BoxVertical,
  BoxHorizontal,
  BoxCenter,
  FlexBox,
  PageContentBox,
  PageContent,
  ...Layouts,
};

// nextjs needs components without '.', so cannot group into Layout.PageContent
export { PageContent } from './PageContent';
export { PageContentBox } from './PageContentBox';
