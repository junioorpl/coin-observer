import React from 'react';
import { StorageProvider } from './Storage';
import { SettingsProvider } from './Settings';

const AppProvider: React.FC = ({ children }) => (
  <SettingsProvider>
    <StorageProvider>{children}</StorageProvider>
  </SettingsProvider>
);

export default AppProvider;
