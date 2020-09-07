import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/auth';
import ToastContainer from './components/ToastContainer';
import { ToastProvider } from './hooks/toast';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
    {/* <SignUp /> */}
  </>
);

export default App;
