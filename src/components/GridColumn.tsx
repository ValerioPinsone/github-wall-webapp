import React from 'react';
import GridItem, { Day } from './GridItem';
import GridStyle from '../styles/Grid.module.css';

export interface GridColumnProps {
  week: number;
  days: Day[];
}

export default function GridColumn({ days }: GridColumnProps) {
  return (
    <div className={GridStyle.gridColumn}>
      {days.map((day: Day, index: number) => (
        <GridItem key={index} val={day.count} />
      ))}
    </div>
  );
}
