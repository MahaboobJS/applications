'use client';
import { ErrorPage } from '@ruyyaan/rebiz/ui';

export default function GlobalError({
  error,
  reset,        
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorPage error={error} reset={reset}></ErrorPage>
      </body>
    </html>
  );
}
