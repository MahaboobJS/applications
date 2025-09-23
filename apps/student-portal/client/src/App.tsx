import React, { useState } from 'react';
import LoginSignupPage from './LoginSignupPage';
import WelcomePage from './WelcomePage';

function App() {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return user ? (
    <WelcomePage username={user} onLogout={handleLogout} />
  ) : (
    <LoginSignupPage onLogin={handleLogin} />
  );
}

export default App;
