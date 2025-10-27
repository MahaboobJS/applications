'use client';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const Container = styled.div`
  padding: 40px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const DatabaseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const DatabaseIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #336791, #ff6b35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 8px 20px rgba(51, 103, 145, 0.3);
`;

const DatabaseTitle = styled.div`
  h2 {
    margin: 0;
    color: #333;
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    margin: 0;
    color: #666;
    font-size: 16px;
    font-weight: 500;
  }
`;

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  
  &:focus {
    outline: none;
    border-color: #336791;
    box-shadow: 0 0 0 3px rgba(51, 103, 145, 0.1);
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const PasswordInput = styled.div`
  position: relative;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 18px;
  
  &:hover {
    color: #336791;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestButton = styled.button`
  background: linear-gradient(45deg, #17a2b8, #20c997);
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CreateButton = styled.button`
  background: linear-gradient(45deg, #28a745, #20c997);
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
`;

const StatusMessage = styled.div`
  padding: 16px;
  margin: 20px 0;
  border-radius: 12px;
  font-weight: 500;
  ${props => props.$success ? `
    background: rgba(40, 167, 69, 0.1);
    color: #28a745;
    border: 2px solid rgba(40, 167, 69, 0.2);
  ` : props.$error ? `
    background: rgba(220, 53, 69, 0.1);
    color: #dc3545;
    border: 2px solid rgba(220, 53, 69, 0.2);
  ` : `
    background: rgba(23, 162, 184, 0.1);
    color: #17a2b8;
    border: 2px solid rgba(23, 162, 184, 0.2);
  `}
`;

export default function PostgreSQLConnection() {
  const [formData, setFormData] = useState({
    connectionName: '',
    databaseName: '',
    databaseUser: '',
    databasePort: '5432',
    databaseHost: '',
    databasePassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setStatusMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setIsTesting(false);
      setStatusMessage('✅ Connection test successful!');
      setMessageType('success');
    }, 2000);
  };

  const handleCreateConnection = async () => {
    setIsCreating(true);
    setStatusMessage('');
    
    try {
      const response = await fetch('/api/connections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.connectionName,
          sourceType: 'PostgreSQL',
          destinationType: 'PostgreSQL',
          sourceConfig: {
            host: formData.databaseHost,
            port: parseInt(formData.databasePort),
            database: formData.databaseName,
            username: formData.databaseUser,
            password: formData.databasePassword
          },
          frequency: 'Manual',
          tags: []
        })
      });

      if (response.ok) {
        setStatusMessage('🎉 Connection created successfully!');
        setMessageType('success');
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        const errorData = await response.json();
        setStatusMessage(`❌ Error: ${errorData.error}`);
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error creating connection:', error);
      setStatusMessage('❌ Failed to create connection. Please try again.');
      setMessageType('error');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Container>
      <Header>
        <Link href="/connections/new" style={{ textDecoration: 'none' }}>
          <BackButton>← Back</BackButton>
        </Link>
        <DatabaseInfo>
          <DatabaseIcon>🐘</DatabaseIcon>
          <DatabaseTitle>
            <h2>PostgreSQL Configuration</h2>
            <p>Database Connection Setup</p>
          </DatabaseTitle>
        </DatabaseInfo>
      </Header>

      <FormContainer>
        <FormGrid>
          <div>
            <FormGroup>
              <Label>Connection Name</Label>
              <Input
                type="text"
                name="connectionName"
                value={formData.connectionName}
                onChange={handleChange}
                placeholder="Enter a unique connection name"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Database Name</Label>
              <Input
                type="text"
                name="databaseName"
                value={formData.databaseName}
                onChange={handleChange}
                placeholder="Enter database name"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Database Port</Label>
              <Input
                type="number"
                name="databasePort"
                value={formData.databasePort}
                onChange={handleChange}
                placeholder="5432"
              />
            </FormGroup>
          </div>
          
          <div>
            <FormGroup>
              <Label>Database Host</Label>
              <Input
                type="text"
                name="databaseHost"
                value={formData.databaseHost}
                onChange={handleChange}
                placeholder="Enter database host (e.g., localhost)"
              />
            </FormGroup>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <FormGroup style={{ flex: 1 }}>
                <Label>Database User</Label>
                <Input
                  type="text"
                  name="databaseUser"
                  value={formData.databaseUser}
                  onChange={handleChange}
                  placeholder="Enter database username"
                />
              </FormGroup>
              
              <FormGroup style={{ flex: 1 }}>
                <Label>Database Password</Label>
                <PasswordInput>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="databasePassword"
                    value={formData.databasePassword}
                    onChange={handleChange}
                    placeholder="Enter database password"
                  />
                  <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '🙈' : '👁️'}
                  </PasswordToggle>
                </PasswordInput>
              </FormGroup>
            </div>
          </div>
        </FormGrid>

        {statusMessage && (
          <StatusMessage $success={messageType === 'success'} $error={messageType === 'error'}>
            {statusMessage}
          </StatusMessage>
        )}

        <ButtonGroup>
          <TestButton onClick={handleTestConnection} disabled={isTesting || isCreating}>
            {isTesting ? <LoadingSpinner /> : '🔍 Test Connection'}
          </TestButton>
          <CreateButton onClick={handleCreateConnection} disabled={isTesting || isCreating}>
            {isCreating ? <LoadingSpinner /> : '✨ Create Connection'}
          </CreateButton>
        </ButtonGroup>
      </FormContainer>
    </Container>
  );
}



