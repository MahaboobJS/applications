export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Welcome to your reBiz dashboard. Here you can view your key metrics and insights.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px'
      }}>
        <div style={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}>
          <h3 style={{ color: '#333', margin: '0 0 15px 0' }}>Key Metrics</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#666' }}>Total Users</span>
            <span style={{ color: '#333', fontWeight: 'bold', fontSize: '24px' }}>1,234</span>
          </div>
        </div>
        
        <div style={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}>
          <h3 style={{ color: '#333', margin: '0 0 15px 0' }}>Revenue</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#666' }}>This Month</span>
            <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '24px' }}>$56,789</span>
          </div>
        </div>
        
        <div style={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}>
          <h3 style={{ color: '#333', margin: '0 0 15px 0' }}>Growth</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#666' }}>vs Last Month</span>
            <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '24px' }}>+12.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
