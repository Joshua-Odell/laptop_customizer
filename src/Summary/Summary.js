
import React from 'react';
import SummaryList from '../Summary/SummaryList';
import Total from './Total';

export default function Summary({ selected, total }) {
  console.log(total)
  return (
    <section className="main__summary">
      {Object.keys(selected).map((feature, idx) => (
        <SummaryList          
          selected={selected}
          feature={feature}
          idx={idx}          
        />
        ))} 
      <Total
        total={total}
      />          
    </section>
  );
}