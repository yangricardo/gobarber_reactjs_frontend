import styled, { keyframes } from 'styled-components';
import signUpBackground from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; /* Estica elementos */
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /*Aplica ao mesmo tempo justify-content e align-content*/
  align-items: center;
  width: 100%;
  max-width: 40vw;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /*Aplica ao mesmo tempo justify-content e align-content*/
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 2vh 0;
    /* width: 50vw; */
    padding: 0 2vw;
    text-align: center;
    h1 {
      margin-bottom: 2vh;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 2vh;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 2vh;
    text-decoration: none;
    transition: color 0.2s;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
