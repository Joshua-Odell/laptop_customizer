import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Options extends Component {
    features = Object.keys(this.props.features).map((feature, idx) => {
        console.log(this.props)
        options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return ( //this is the item choice buttons. they are dependant on the constants above
            <div key={itemHash} className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.state.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
            );
        });
    });
}

export default Options;