import React, { Component } from 'react';
import Options from './Options/Options';


class Choices extends Component {
    features = Object.keys(this.props.features).map((feature, idx) => {
        let featureHash = feature + '-' + idx;
        return ( //this is the title for the choices requires featureHash, feature and options 
            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
            <Options />
            </fieldset>
        );
        });
}

export default Choices;