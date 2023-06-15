import React, { useEffect, useState } from 'react';
import GridColumn, { GridColumnProps } from './GridColumn';
import GridStyle from '../styles/Grid.module.css';


export interface GridProps {
    username: string;
    year: string;
}
function Grid({ username, year }: GridProps) {
  const [contributions, setContributions] = useState<GridColumnProps[]>([]);


  useEffect(() => {
    fetchGrid();
  }, [username, year]);

  async function fetchGrid() {
    try {
        setContributions([]);
      const response = await fetch(`/api/${username}/${year}.json`);
      const data = await response.json();
      setContributions(data.contributions);
    } catch (error) {
      console.error('Errore durante la richiesta API:', error);
    }
  }

  return (
    <>
     
      <div className={GridStyle.grid}>
        {contributions ? (
          contributions.map((contribution, index) => (
            <GridColumn key={index} week={contribution.week} days={contribution.days} />
          ))
        ) : (
          <p>Nessun dato disponibile</p>
        )}
      </div>
    </>
  );
}

export default Grid;
