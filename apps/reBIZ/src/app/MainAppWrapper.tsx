'use client';
import * as React from 'react';

export function MainAppWrapper({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to reBiz</h1>
      <p style={{ color: '#666', textAlign: 'center', maxWidth: '500px' }}>
        Your business intelligence application is ready. The main features and navigation will be
        available soon.
      </p>
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
