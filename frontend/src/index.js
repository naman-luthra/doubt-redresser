import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App } from './App';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PrivateRoute } from './features/auth/PrivateRoute';
import { SignIn } from './features/auth/SignIn';
import { SignUp } from './features/auth/SignUp';
import { RaiseDoubt } from './features/pages/RaiseDoubt';
import { SolveDoubts } from './features/pages/SolveDoubts';
import { SolveDoubt } from './features/pages/SolveDoubt';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/ask-doubt" element={<PrivateRoute><RaiseDoubt /></PrivateRoute>} />
        <Route path="/solve-doubts" element={<PrivateRoute><SolveDoubts /></PrivateRoute>} />
        <Route path="/solve-doubt/:doubtId" element={<PrivateRoute><SolveDoubt /></PrivateRoute>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  </BrowserRouter>
  </Provider>
);
