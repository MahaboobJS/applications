'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

const NewConnectionButton = styled(Link)`
  background: linear-gradient(45deg, #28a745, #20c997);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 500;
`;

const ConnectionsTable = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
  font-weight: 600;
  color: #333;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  ${props => props.$status === 'active' ? `
    background: rgba(40, 167, 69, 0.1);
    color: #28a745;
  ` : props.$status === 'inactive' ? `
    background: rgba(108, 117, 125, 0.1);
    color: #6c757d;
  ` : props.$status === 'failed' ? `
    background: rgba(220, 53, 69, 0.1);
    color: #dc3545;
  ` : `
    background: rgba(255, 193, 7, 0.1);
    color: #ffc107;
  `}
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
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

export default function Dashboard() {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);

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

  const activeConnections = connections.filter(conn => conn.status === 'active').length;
  const totalConnections = connections.length;

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
        <Title>Dashboard</Title>
        <NewConnectionButton href="/connections/new">
          + New Connection
        </NewConnectionButton>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatNumber>{totalConnections}</StatNumber>
          <StatLabel>All Connections</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{activeConnections}</StatNumber>
          <StatLabel>Active</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{totalConnections - activeConnections}</StatNumber>
          <StatLabel>Inactive</StatLabel>
        </StatCard>
      </StatsGrid>

      <ConnectionsTable>
        <TableHeader>
          <div>Name</div>
          <div>Source</div>
          <div>Destination</div>
          <div>Status</div>
          <div>Last Sync</div>
        </TableHeader>
        
        {connections.length === 0 ? (
          <EmptyMessage>No connections found</EmptyMessage>
        ) : (
          connections.map((connection) => (
            <TableRow key={connection._id}>
              <div>{connection.name}</div>
              <div>{connection.sourceType}</div>
              <div>{connection.destinationType}</div>
              <div>
                <StatusBadge $status={connection.status}>
                  {connection.status}
                </StatusBadge>
              </div>
              <div>
                {connection.lastSync 
                  ? new Date(connection.lastSync).toLocaleDateString()
                  : 'Never'
                }
              </div>
            </TableRow>
          ))
        )}
      </ConnectionsTable>
    </Container>
  );
}