import React from 'react';
import Colors from './components/Colors';

function App() {
  
  const colorsData = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
    { id: 3, name: 'Green' },
  ];

  return (
    <>
      <Colors colors={ colorsData } />
    </>
  )
}

export default App
