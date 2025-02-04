// src/App.jsx
import React from 'react';
import MainLayout from './presentation/layouts/MainLayout';
import Router from './infrastructure/routes/routes';
import './styles/main.scss';


export default function App() {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  )
    
}