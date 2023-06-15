import React, { useEffect } from 'react';

function Grid() {
  useEffect(() => {
    fetchGrid();
  }, []);

  async function fetchGrid() {
    try {
      const response = await fetch('/api/valeriopinsone/2023.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Errore durante la richiesta API:', error);
    }
  }

  return <h1>Grid</h1>;
}

export default Grid;
