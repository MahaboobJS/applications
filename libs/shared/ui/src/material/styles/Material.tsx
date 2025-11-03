import { createGlobalStyle } from 'styled-components';

import { colors } from '../../styles/colors';

const GlobalStyle = createGlobalStyle`
/** stop list elements having too much padding */
    .MuiPaper-root .MuiCardContent-root:last-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    /** ?? */
    .MuiBox-root .MuiTabPanel-root {
      padding: 0;
      padding-top: 15px;
    }

    /** buttons in a toggle group */
    .MuiToggleButtonGroup-root {
      button {
        padding: 7px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    /** tree styles */
    .MuiCollapse-root .MuiCollapse-vertical .MuiTreeItem-group {
      margin-left: 10px;
    }
    .MuiTreeItem-root .MuiTreeItem-iconContainer {
      width: 0px !important;
    }
    .MuiTreeItem-root {
      padding: 16px 12px 0px 0px !important;
    }
    .MuiTreeItem-root .MuiTreeItem-content {
      // background: none !important;
      // background-color: none !important;
      height: 34px;
      padding-right: 18px;
      padding-left: 12px;
      &:hover {
        // background: none !important;
        // background-color: none !important;
        background-color: ${colors.surface.status.neutralMuted} !important;
        border-radius: 6px;
        height: 34px;
        padding-right: 18px;
      }
    }
    .MuiTreeItem-root.leaf .Mui-selected {
      background-color: ${colors.surface.status.neutralMuted} !important;
      border-radius: 6px;
      height: 34px;
      padding-right: 18px;
    }
    .MuiTreeItem-content.Mui-selected {
      background-color: ${colors.surface.status.neutralMuted} !important;
      border-radius: 6px;
      height: 34px;
      padding-right: 18px;
    }
`;

export const Material = () => {
  return <GlobalStyle />;
};
