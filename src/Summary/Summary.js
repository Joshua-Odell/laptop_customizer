
import React from 'react';
import SummaryList from '../Summary/SummaryList';

export default function Summary({ selected }) {
  return (
    <section className="main__summary">
      {Object.keys(selected).map((feature, idx) => (
        <SummaryList          
          selected={selected}
          feature={feature}
          idx={idx}          
        />
      ))}      
    </section>
  );
}