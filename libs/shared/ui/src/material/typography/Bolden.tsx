import * as React from 'react';

import { Title } from './Title';

// export const Bolden: React.FC<React.PropsWithChildren> = ({ children }) => {
// if (!children) {
//   return <p>Bold target was not supplied</p>;
// }
// if (!React.isValidElement(children)) {
//   return <p>Bold target was not supplied</p>;
// }
// const bold = { fontWeight: '900' };
// const modifiedChildren = React.Children.map(children, (child) => {
//   if (!React.isValidElement(child)) {
//     return child;
//   }
//   const modifiedProps = {
//     ...child.props,
//     sx: child.props.sx ? { ...child.props.sx, ...bold } : bold,
//   };
//   return React.cloneElement(child as JSX.Element, modifiedProps);
// });
// };

// use something more simple for now, as this is not heavily used, and causing type issues
export const Bold1: React.FC<{ text: string }> = ({ text }) => {
   
  return <Title.Medium text={text} sx={{ fontWeight: '900' }} />;
};
