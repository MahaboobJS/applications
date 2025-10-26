'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

const NewConnectionButton = styled(Link)`
  background: #3b82f6;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #2563eb;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  margin: 20px 0;
  align-items: center;
`;

const NavLink = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: ${props => props.$active ? 'white' : '#9ca3af'};
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  padding: 8px 0;
  font-size: 14px;
  
  &:hover {
    color: white;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #2d2d2d;
  border: 1px solid #404040;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const Filter = styled.select`
  padding: 10px 16px;
  background: #2d2d2d;
  border: 1px solid #404040;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const ActivitySection = styled.div`
  background: #2d2d2d;
  border: 1px solid #404040;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ActivityTitle = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const TimeRangeButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const TimeRangeButton = styled.button<{ $active?: boolean }>`
  padding: 6px 12px;
  background: ${props => props.$active ? '#3b82f6' : '#2d2d2d'};
  border: 1px solid ${props => props.$active ? '#3b82f6' : '#404040'};
  border-radius: 6px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.$active ? '#2563eb' : '#404040'};
  }
`;

const ChartContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid #404040;
`;

const ChartBar = styled.div<{ $height: number }>`
  flex: 1;
  height: ${props => props.$height}%;
  background: #3b82f6;
  border-radius: 4px 4px 0 0;
  min-height: 20px;
`;

const ChartLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 10px;
  color: #9ca3af;
`;

const DateRangeContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
`;

const ConnectionsTable = styled.div`
  background: #2d2d2d;
  border: 1px solid #404040;
  border-radius: 12px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px 24px;
  background: #2d2d2d;
  font-weight: 600;
  font-size: 12px;
  color: #9ca3af;
  text-transform: uppercase;
  border-bottom: 1px solid #404040;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #404040;
  color: white;
  font-size: 14px;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #353535;
  }
`;

const StatusBadge = styled.span<{ $status: 'active' | 'inactive' | 'failed' | 'pending' }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  ${props => props.$status === 'active' ? `
    background: #22c55e;
    color: white;
  ` : props.$status === 'inactive' ? `
    background: #6b7280;
    color: white;
  ` : props.$status === 'failed' ? `
    background: #ef4444;
    color: white;
  ` : `
    background: #f59e0b;
    color: white;
  `}
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;
  font-size: 18px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;
  font-size: 18px;
`;

const ToggleSwitch = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`;

const SwitchInput = styled.input`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #404040;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  
  &:checked {
    background: #22c55e;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: 2px;
    transition: all 0.3s;
  }
  
  &:checked:before {
    left: 22px;
  }
`;

const DeleteButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #dc2626;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const DateRangeInput = styled.input`
  padding: 8px 12px;
  background: #2d2d2d;
  border: 1px solid #404040;
  border-radius: 6px;
  color: white;
  font-size: 12px;
  width: 120px;
  
  &::placeholder {
    color: #9ca3af;
  }
`;

interface Connection {
  _id: string;
  name: string;
  sourceType: string;
  destinationType: string;
  status: 'active' | 'inactive' | 'failed' | 'pending';
  lastSync?: string;
  createdAt: string;
}

export default function HomePage() {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [timeRange, setTimeRange] = useState('7d');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [destinationFilter, setDestinationFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  
  // Generate dynamic chart data based on date range
  const generateChartData = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      
      if (days > 0 && days <= 30) {
        const data = [];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        for (let i = 0; i <= days; i++) {
          const date = new Date(start);
          date.setDate(start.getDate() + i);
          const dayName = dayNames[date.getDay()];
          const month = date.toLocaleString('en-US', { month: 'short' });
          const day = date.getDate();
          const value = Math.floor(Math.random() * 100); // Random value for demo
          data.push({
            day: `${dayName}, ${month} ${day}`,
            value: value
          });
        }
        return data;
      }
    }
    
    // Default data when no date range is selected
    return [
      { day: 'Fri, Oct 17', value: 95 },
      { day: 'Sat, Oct 18', value: 85 },
      { day: 'Sun, Oct 19', value: 25 },
      { day: 'Mon, Oct 20', value: 65 },
      { day: 'Tue, Oct 21', value: 30 },
      { day: 'Wed, Oct 22', value: 70 },
      { day: 'Thu, Oct 23', value: 80 }
    ];
  };

  const chartData = generateChartData();

  const handleDeleteConnection = async (connectionId: string) => {
    if (window.confirm('Are you sure you want to delete this connection?')) {
      try {
        const response = await fetch(`/api/connections/${connectionId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setConnections(connections.filter(conn => conn._id !== connectionId));
        } else {
          console.error('Failed to delete connection');
        }
      } catch (error) {
        console.error('Error deleting connection:', error);
      }
    }
  };

  const filteredConnections = connections.filter(connection => {
    // Apply tab filter
    if (activeTab === 'active' && connection.status !== 'active') return false;
    if (activeTab === 'failed' && connection.status !== 'failed') return false;
    if (activeTab === 'pending' && connection.status !== 'pending') return false;
    
    // Apply status filter
    if (statusFilter === 'all') {}
    else if (statusFilter === 'Active' && connection.status !== 'active') return false;
    else if (statusFilter === 'Inactive' && connection.status !== 'inactive') return false;
    else if (statusFilter === 'Failed' && connection.status !== 'failed') return false;
    else if (statusFilter === 'Pending' && connection.status !== 'pending') return false;
    
    // Apply source filter
    if (sourceFilter !== 'all' && connection.sourceType !== sourceFilter) return false;
    
    // Apply destination filter
    if (destinationFilter !== 'all' && connection.destinationType !== destinationFilter) return false;
    
    return true;
  });


  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await fetch('/api/connections');
        if (response.ok) {
          const data = await response.json();
          setConnections(data.connections || []);
        } else {
          console.error('Failed to fetch connections');
        }
      } catch (error) {
        console.error('Error fetching connections:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConnections();
  }, []);

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading connections...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Connections</Title>
        <NewConnectionButton href="/connections/new">
          + New Connection
        </NewConnectionButton>
      </Header>

      <NavLinks>
        <NavLink $active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
          All Connections
        </NavLink>
        <NavLink $active={activeTab === 'active'} onClick={() => setActiveTab('active')}>
          Active
        </NavLink>
        <NavLink $active={activeTab === 'pending'} onClick={() => setActiveTab('pending')}>
          Pending
        </NavLink>
        <NavLink $active={activeTab === 'failed'} onClick={() => setActiveTab('failed')}>
          Failed
        </NavLink>
        <NavLink $active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
          Settings
        </NavLink>
      </NavLinks>

      <SearchBar placeholder="Search" />

      <FilterBar>
        <Filter value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Failed">Failed</option>
          <option value="Pending">Pending</option>
        </Filter>
        <Filter value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}>
          <option value="all">All sources</option>
          <option value="MySQL">MySQL</option>
          <option value="PostgreSQL">PostgreSQL</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Microsoft SQL Server">Microsoft SQL Server</option>
          <option value="Oracle">Oracle</option>
          <option value="Amazon Redshift">Amazon Redshift</option>
          <option value="Snowflake">Snowflake</option>
          <option value="BigQuery">BigQuery</option>
          <option value="Databricks">Databricks</option>
          <option value="DuckDB">DuckDB</option>
          <option value="Iceberg">Iceberg</option>
          <option value="Google Analytics">Google Analytics</option>
          <option value="Amazon S3">Amazon S3</option>
          <option value="Google Drive">Google Drive</option>
          <option value="OneDrive">OneDrive</option>
          <option value="Dropbox">Dropbox</option>
          <option value="Box">Box</option>
          <option value="File System">File System</option>
          <option value="Pact REST API">Pact REST API</option>
        </Filter>
        <Filter value={destinationFilter} onChange={(e) => setDestinationFilter(e.target.value)}>
          <option value="all">All destinations</option>
          <option value="MySQL">MySQL</option>
          <option value="PostgreSQL">PostgreSQL</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Microsoft SQL Server">Microsoft SQL Server</option>
          <option value="Oracle">Oracle</option>
          <option value="Amazon Redshift">Amazon Redshift</option>
          <option value="Snowflake">Snowflake</option>
          <option value="BigQuery">BigQuery</option>
          <option value="Databricks">Databricks</option>
          <option value="DuckDB">DuckDB</option>
          <option value="Iceberg">Iceberg</option>
          <option value="Amazon S3">Amazon S3</option>
          <option value="Google Drive">Google Drive</option>
          <option value="OneDrive">OneDrive</option>
          <option value="Dropbox">Dropbox</option>
          <option value="Box">Box</option>
          <option value="File System">File System</option>
        </Filter>
        <Filter value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
          <option value="all">All tags</option>
          <option value="Production">Production</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="Staging">Staging</option>
          <option value="Analytics">Analytics</option>
          <option value="Backup">Backup</option>
          <option value="Archive">Archive</option>
          <option value="Critical">Critical</option>
          <option value="High Priority">High Priority</option>
          <option value="Low Priority">Low Priority</option>
        </Filter>
      </FilterBar>

      <ActivitySection>
         <ActivityHeader>
           <ActivityTitle>Activity</ActivityTitle>
           <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
             <TimeRangeButtons>
               <TimeRangeButton $active={timeRange === '6h'} onClick={() => setTimeRange('6h')}>
                 6h
               </TimeRangeButton>
               <TimeRangeButton $active={timeRange === '24h'} onClick={() => setTimeRange('24h')}>
                 24h
               </TimeRangeButton>
               <TimeRangeButton $active={timeRange === '7d'} onClick={() => setTimeRange('7d')}>
                 7d
               </TimeRangeButton>
               <TimeRangeButton $active={timeRange === '30d'} onClick={() => setTimeRange('30d')}>
                 30d
               </TimeRangeButton>
             </TimeRangeButtons>
             <DateRangeContainer>
               <DateRangeInput 
                 type="date" 
                 value={startDate}
                 onChange={(e) => setStartDate(e.target.value)}
                 placeholder="Start date"
               />
               <span style={{ color: '#9ca3af' }}>to</span>
               <DateRangeInput 
                 type="date" 
                 value={endDate}
                 onChange={(e) => setEndDate(e.target.value)}
                 placeholder="End date"
               />
             </DateRangeContainer>
           </div>
         </ActivityHeader>
        
         <ChartContainer>
           {chartData.map((item, index) => (
             <ChartBar key={index} $height={item.value} />
           ))}
         </ChartContainer>
         <ChartLabels>
           {chartData.map((item, index) => (
             <div key={index}>{item.day}</div>
           ))}
         </ChartLabels>
      </ActivitySection>

        <ConnectionsTable>
          <TableHeader>
            <div>NAME</div>
            <div>SOURCE</div>
            <div>DESTINATION</div>
            <div>FREQUENCY</div>
            <div>TAGS</div>
            <div>LAST SYNC</div>
            <div>ENABLED</div>
            <div>ACTIONS</div>
          </TableHeader>
          
          {filteredConnections.length === 0 ? (
            <EmptyMessage>No connections found</EmptyMessage>
          ) : (
            filteredConnections.map((connection) => (
              <TableRow key={connection._id}>
                <div>{connection.name}</div>
                <div>{connection.sourceType}</div>
                <div>{connection.destinationType}</div>
                <div>Manual</div>
                <div>-</div>
                <div>
                  {connection.lastSync 
                    ? new Date(connection.lastSync).toLocaleDateString()
                    : 'Never'
                  }
                </div>
                <div>
                  <ToggleSwitch>
                    <SwitchInput type="checkbox" defaultChecked={connection.status === 'active'} />
                  </ToggleSwitch>
                </div>
                <div>
                  <ActionButtons>
                    <StatusBadge $status={connection.status}>
                      {connection.status}
                    </StatusBadge>
                    <DeleteButton onClick={() => handleDeleteConnection(connection._id)}>
                      Delete
                    </DeleteButton>
                  </ActionButtons>
                </div>
              </TableRow>
            ))
          )}
        </ConnectionsTable>
    </Container>
  );
}