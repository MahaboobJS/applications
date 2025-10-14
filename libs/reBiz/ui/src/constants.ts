export const HEADER_PADDING_TOP = '0';
export const HEADER_PADDING_BOTTOM = '0';
export const HEADER_PADDING_Y = `${
  parseFloat(HEADER_PADDING_TOP) + parseFloat(HEADER_PADDING_BOTTOM)
}px`;
export const BREADCRUMBS_HEIGHT = '50px';
export const BREADCRUMBS_PADDING_Y = '2px';

export const FULL_HEIGHT = `calc(100vh - ${HEADER_PADDING_Y} - ${BREADCRUMBS_HEIGHT})`;

export const PERMIT_VIEW_PAGE_HEIGHT = `calc(100vh - ${BREADCRUMBS_HEIGHT} - ${BREADCRUMBS_PADDING_Y})`;
export const PERMIT_DRAWER_HEIGHT = `calc(100vh - ${HEADER_PADDING_Y} - ${BREADCRUMBS_HEIGHT} - ${BREADCRUMBS_PADDING_Y})`;

export const BODY_PADDING_TOP = '20px';
