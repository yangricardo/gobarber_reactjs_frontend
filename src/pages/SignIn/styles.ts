import styled from 'styled-components';
import signInBackground from '../../assets/sign-in-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; /* Estica elementos */
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center; /*Aplica ao mesmo tempo justify-content e align-content*/
  align-items: center;
  width: 100%;
  max-width: 40vw;

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
    color: #ff9000;
    display: block;
    margin-top: 2vh;
    text-decoration: none;
    transition: color 0.2s;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
