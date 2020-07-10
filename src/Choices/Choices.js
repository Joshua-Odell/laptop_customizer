import React, { Component } from 'react';
import Options from './Options/Options';

console.log(this)//returning undefined

class Choices extends Component {
    render() {
        features = Object.keys(this.props.features).map((feature, idx) => {
            let featureHash = feature + '-' + idx;
            return ( //this is the title for the choices requires featureHash, feature and options 
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <Options 
                feature={this.props.features}/>
                </fieldset>
            );
            });
    }    
}

export default Choices;