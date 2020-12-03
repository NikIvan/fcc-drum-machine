import React from 'react';
import AppLayout from './AppLayout';
import {DrumMachineProvider} from './contexts/DrumMachineContext';

function App() {
  return (
    <DrumMachineProvider>
      <AppLayout />
    </DrumMachineProvider>
  )
}

export default App;
