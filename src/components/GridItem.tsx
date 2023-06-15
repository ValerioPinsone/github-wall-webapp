import React, { useEffect, useState } from 'react';
import GridStyle from '../styles/Grid.module.css';

export interface Day {
    count: number
}

interface GridItemProps {
  val: number;
}


export default function GridItem({ val }: GridItemProps) {
  const [color, setColor] = useState(GridStyle.lvl0);
  
  
useEffect(() => {
    if (val > 0 && val < 5) {  
        setColor(GridStyle.lvl1);
    } else if (val >= 5 && val < 10) {
        setColor(GridStyle.lvl2);
    } else if (val >= 10 && val < 15) {
        setColor(GridStyle.lvl3);
    } else if (val >= 15 && val < 20) {
        setColor(GridStyle.lvl4);
    }else{
        setColor(GridStyle.lvl0);
    }
}, []);




    
  return (
    <div className={[GridStyle.gridItem, color].join(' ')}>
      {/* <h1>{val}</h1> */}
    </div>
  );
}
