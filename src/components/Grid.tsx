import React, { useEffect, useState } from 'react';
import GridColumn, { GridColumnProps } from './GridColumn';
import GridStyle from '../styles/Grid.module.css';

function Grid() {
  const [contributions, setContributions] = useState<GridColumnProps[]>([]);

  useEffect(() => {
    fetchGrid();
  }, []);

  async function fetchGrid() {
    try {
      const response = await fetch('/api/valeriopinsone/2023.json');
      const data = await response.json();
      setContributions(data.contributions);
    } catch (error) {
      console.error('Errore durante la richiesta API:', error);
    }
  }

  return (
    <div className={GridStyle.grid}>
      {contributions.map((contribution, index) => (
        <GridColumn key={index} week={contribution.week} days={contribution.days} />
      ))}
    </div>
  );
}

export default Grid;
