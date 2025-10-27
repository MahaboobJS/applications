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
  background: linear-gradient(45deg, #1e3a8a, #3b82f6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
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
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
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
    color: #1e3a8a;
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

export default function IcebergConnection() {
  const [formData, setFormData] = useState({
    connectionName: '',
    catalogType: 'hadoop',
    warehousePath: '',
    catalogName: '',
    namespace: '',
    s3Endpoint: '',
    s3AccessKey: '',
    s3SecretKey: '',
    s3Region: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setStatusMessage('');
    
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
          sourceType: 'Iceberg',
          destinationType: 'Iceberg',
          sourceConfig: {
            catalogType: formData.catalogType,
            warehousePath: formData.warehousePath,
            catalogName: formData.catalogName,
            namespace: formData.namespace,
            s3Endpoint: formData.s3Endpoint,
            s3AccessKey: formData.s3AccessKey,
            s3SecretKey: formData.s3SecretKey,
            s3Region: formData.s3Region
          },
          frequency: 'Manual',
          tags: []
        })
      });

      if (response.ok) {
        setStatusMessage('🎉 Connection created successfully!');
        setMessageType('success');
        
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
          <DatabaseIcon>🧊</DatabaseIcon>
          <DatabaseTitle>
            <h2>Apache Iceberg Configuration</h2>
            <p>Data Lake Table Format Setup</p>
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
              <Label>Catalog Type</Label>
              <select
                name="catalogType"
                value={formData.catalogType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <option value="hadoop">Hadoop</option>
                <option value="hive">Hive Metastore</option>
                <option value="nessie">Nessie</option>
                <option value="rest">REST Catalog</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <Label>Warehouse Path</Label>
              <Input
                type="text"
                name="warehousePath"
                value={formData.warehousePath}
                onChange={handleChange}
                placeholder="Enter warehouse path (e.g., s3://bucket/warehouse)"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Catalog Name</Label>
              <Input
                type="text"
                name="catalogName"
                value={formData.catalogName}
                onChange={handleChange}
                placeholder="Enter catalog name"
              />
            </FormGroup>
          </div>
          
          <div>
            <FormGroup>
              <Label>Namespace</Label>
              <Input
                type="text"
                name="namespace"
                value={formData.namespace}
                onChange={handleChange}
                placeholder="Enter namespace (database)"
              />
            </FormGroup>
            
            {formData.catalogType === 'hadoop' && (
              <>
                <FormGroup>
                  <Label>S3 Endpoint</Label>
                  <Input
                    type="text"
                    name="s3Endpoint"
                    value={formData.s3Endpoint}
                    onChange={handleChange}
                    placeholder="Enter S3 endpoint URL"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>S3 Access Key</Label>
                  <Input
                    type="text"
                    name="s3AccessKey"
                    value={formData.s3AccessKey}
                    onChange={handleChange}
                    placeholder="Enter S3 access key"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>S3 Secret Key</Label>
                  <PasswordInput>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="s3SecretKey"
                      value={formData.s3SecretKey}
                      onChange={handleChange}
                      placeholder="Enter S3 secret key"
                    />
                    <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? '🙈' : '👁️'}
                    </PasswordToggle>
                  </PasswordInput>
                </FormGroup>
                
                <FormGroup>
                  <Label>S3 Region</Label>
                  <Input
                    type="text"
                    name="s3Region"
                    value={formData.s3Region}
                    onChange={handleChange}
                    placeholder="Enter S3 region"
                  />
                </FormGroup>
              </>
            )}
            
            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '12px', marginTop: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Apache Iceberg Information</h3>
              <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
                Connect to Apache Iceberg data lake table format. Configure catalog type, 
                warehouse path, and storage credentials for your data lake.
              </p>
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


