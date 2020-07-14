import React from 'react';
import Options from './Options';

export default function Feature({feature, idx, features, selected, updateFeature }){
    const featureHash = feature + '-' + idx;
    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {features[feature].map(item => (
            <Options
                feature={feature}
                selected={selected}
                item={item}
                updateFeature={updateFeature}
            />
          ))}  
        </fieldset>
      );

}