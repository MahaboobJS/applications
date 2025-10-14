import React from 'react';

const LoginSignupPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: '#1a1a1a',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Left Side - Welcome */}
      <div style={{
        background: '#f72585',
        color: '#fff',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        minWidth: 350,
        padding: 40,
      }}>
        <h1 style={{ fontWeight: 700, fontSize: 32 }}>Welcome to</h1>
        <div style={{ fontSize: 18, marginBottom: 32 }}>Student Portal</div>
        {/* Illustration Placeholder */}
        <div style={{
          width: 250,
          height: 250,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ color: '#fff', opacity: 0.5 }}>[Illustration]</span>
        </div>
      </div>
      {/* Right Side - Login/Signup Form */}
      <div style={{
        background: '#232323',
        color: '#fff',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        minWidth: 350,
        padding: 40,
      }}>
        {/* Form will go here */}
      </div>
    </div>
  );
};

export default LoginSignupPage;
