import React from 'react';
import { Container, Toast } from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Deu Ruim galera</strong>
          <p>Vai dar pra ir não........ PQP</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="error" hasDescription={false}>
        <FiAlertCircle />
        <div>
          <strong>Deu Ruim galera</strong>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="success" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Deu Ruim galera</strong>
          <p>Vai dar pra ir não........ PQP</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
