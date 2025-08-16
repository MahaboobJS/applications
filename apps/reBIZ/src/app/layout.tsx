import './global.css';

import { MainApp } from './MainApp';

export const metadata = {
  title: 'reBIZ - Business Intelligence Platform',
  description: 'Advanced business intelligence and analytics platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainApp>{children}</MainApp>
      </body>
    </html>
  );
}
