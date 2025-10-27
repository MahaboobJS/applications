'use client';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const Container = styled.div`
  padding: 40px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: white;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  animation: ${slideIn} 1s ease-out;
`;

const BackButton = styled.button`
  background: #f5f5f5;
  border: 2px solid #e0e0e0;
  color: #333;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e8e8e8;
    transform: translateX(-4px);
  }
`;

const Title = styled.h1`
  color: #333;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DatabaseCard = styled.div`
  background: #f9f9f9;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: #3b82f6;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    animation: ${bounce} 0.6s ease;
    background: white;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const Icon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  
  ${DatabaseCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const DatabaseName = styled.h3`
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.25rem;
  font-weight: 600;
`;

const DatabaseType = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
  font-weight: 500;
`;

const databases = [
  { name: 'MySQL', type: 'Database', icon: '🐬', color: '#007bff' },
  { name: 'PostgreSQL', type: 'Database', icon: '🐘', color: '#336791' },
  { name: 'Microsoft SQL Server', type: 'Database', icon: '🔴', color: '#cc2927' },
  { name: 'Amazon Redshift', type: 'Database', icon: '📊', color: '#ff9900' },
  { name: 'Google Analytics', type: 'Database', icon: '📈', color: '#f4b400' },
  { name: 'Amazon S3', type: 'Csv', icon: '📦', color: '#ff9900' },
  { name: 'File System', type: 'Csv', icon: '📁', color: '#007bff' },
  { name: 'Google Drive', type: 'Csv', icon: '☁️', color: '#4285f4' },
  { name: 'Iceberg', type: 'Database', icon: '🧊', color: '#007bff' },
  { name: 'DuckDB', type: 'DuckDB', icon: '🦆', color: '#000000' },
  { name: 'Oracle', type: 'Database', icon: '🔴', color: '#cc2927' },
  { name: 'Pact REST API', type: 'RestAPI', icon: '🌐', color: '#87ceeb' }
];

export default function DatabaseSelection() {
  return (
    <Container>
      <Header>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <BackButton>← Back</BackButton>
        </Link>
        <Title>Select Database Type</Title>
      </Header>

      <Grid>
        {databases.map((db, index) => (
          <Link key={index} href={`/connections/new/${db.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <DatabaseCard>
              <Icon style={{ color: db.color }}>
                {db.icon}
              </Icon>
              <DatabaseName>{db.name}</DatabaseName>
              <DatabaseType>{db.type}</DatabaseType>
            </DatabaseCard>
          </Link>
        ))}
      </Grid>
    </Container>
  );
}
