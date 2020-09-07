import React from 'react';
import { Container, Toast } from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle />
        <div>
          <strong>Erro</strong>
          <p>Nao deu</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
