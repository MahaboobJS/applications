export default function Index() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#333', marginBottom: '16px' }}>reBiz Dashboard</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Welcome to your business intelligence platform. Get started by exploring the features below.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        <div
          style={{
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3 style={{ color: '#333', margin: '0 0 10px 0' }}>Analytics</h3>
          <p style={{ color: '#666', margin: 0 }}>View your data insights and reports</p>
        </div>

        <div
          style={{
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3 style={{ color: '#333', margin: '0 0 10px 0' }}>Dashboards</h3>
          <p style={{ color: '#666', margin: 0 }}>Create and manage your dashboards</p>
        </div>

        <div
          style={{
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3 style={{ color: '#333', margin: '0 0 10px 0' }}>Reports</h3>
          <p style={{ color: '#666', margin: 0 }}>Generate and export reports</p>
        </div>
      </div>
    </div>
  );
}
