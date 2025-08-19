import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// Simple loading component to replace the barrel import
const Loading = ({ fullScreen }: { fullScreen?: boolean }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: fullScreen ? '100vh' : '200px',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <div
      style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
      }}
      className='auth-spinner'
    />
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .auth-spinner {
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `,
      }}
    />
  </div>
);
// import { getRoutes } from '@ruyyaan-solutions/reBiz/util-access';

const API_BASE = '/api/v1';
const AUTH_BASE = '/api/v1/auth';

export const routes: Record<string, Route> = {
  API: {
    url: API_BASE,
    public: true,
  },
  LOGIN: {
    url: `${AUTH_BASE}/signIn`,
    public: true,
  },
  DASHBOARD: {
    url: '/dashboard',
  },
} as const;

export function AuthProvider({ children }: React.PropsWithChildren) {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [showChildren, setShowChildren] = React.useState(false);

  React.useEffect(() => {
    // wait until we have the things to check:
    if (!status || !pathname) {
      return;
    }

    // if we are loading, then wait
    if (status === 'loading') {
      return;
    }

    // then let's see if we are authenticated:
    if (status === 'authenticated') {
      setShowChildren(true);
      return;
    }

    // if not, then perhaps we are already trying to login:
    if (pathname === routes.LOGIN.url) {
      setShowChildren(true);
      return;
    }

    // here we are not authenticated and on some other page
    // so lets go to login instead of letting them see the page
    router.push(routes.LOGIN.url);
  }, [status, pathname]);

  if (showChildren) {
    return children;
  }

  return <Loading fullScreen />;
}

interface Route {
  url: string;
  public?: boolean;
}
