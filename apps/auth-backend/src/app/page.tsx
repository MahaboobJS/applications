export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Auth Backend API</h1>
      <p>Next.js API backend for authentication system</p>
      <p>API endpoints available at:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>POST /api/auth/register</li>
        <li>POST /api/auth/login</li>
        <li>GET /api/auth/me</li>
        <li>POST /api/auth/logout</li>
        <li>GET /api/health</li>
      </ul>
    </div>
  );
}